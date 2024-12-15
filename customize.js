let tabs = [];
let uploadedScreenshot = null; // Store the uploaded screenshot

// Preview screenshot when uploaded
function previewScreenshot(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('screenshotPreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
            uploadedScreenshot = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Validate URL
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Get website favicon
function getFavicon(url) {
    try {
        const urlObject = new URL(url);
        return `https://www.google.com/s2/favicons?domain=${urlObject.hostname}&sz=64`;
    } catch (error) {
        return "https://cdn-icons-png.flaticon.com/512/1042/1042280.png"; // Fallback icon
    }
}

// Get website title
async function getWebsiteTitle(url) {
    try {
        const urlObject = new URL(url);
        const hostname = urlObject.hostname;
        const title = hostname
            .replace('www.', '')
            .split('.')[0]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return title;
    } catch (error) {
        return url;
    }
}

// Toggle Add Tab form
function toggleAddTab() {
    const addTabDiv = document.getElementById('addTab');
    addTabDiv.style.display = addTabDiv.style.display === 'block' ? 'none' : 'block';
}

// Add a new tab
async function addNewTab() {
    const input = document.getElementById('newTabInput');
    const memoryUsageInput = document.getElementById('memoryUsageInput');
    let url = input.value.trim();

    if (!url) return;

    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    if (!isValidUrl(url)) {
        alert("Please enter a valid URL (e.g., example.com or https://example.com)");
        return;
    }

    try {
        // Disable inputs while processing
        input.disabled = true;
        memoryUsageInput.disabled = true;

        const title = await getWebsiteTitle(url);
        const icon = getFavicon(url);
        const memoryUsage = memoryUsageInput.value ? parseFloat(memoryUsageInput.value) : null;

        tabs.push({
            title: title,
            icon: icon,
            url: url,
            screenshot: uploadedScreenshot, // Add screenshot
            memoryUsage: memoryUsage
        });

        // Clear inputs and reset state
        input.value = '';
        memoryUsageInput.value = '';
        input.disabled = false;
        memoryUsageInput.disabled = false;

        const preview = document.getElementById('screenshotPreview');
        preview.src = '';
        preview.style.display = 'none';
        uploadedScreenshot = null;

        renderTabs();
        toggleAddTab();
    } catch (error) {
        console.error('Error adding tab:', error);
        alert('Error adding tab. Please try again.');
        input.disabled = false;
        memoryUsageInput.disabled = false;
    }
}

// Create a single tab element
function createTab(tab, index) {
    const tabElement = document.createElement('a');
    tabElement.className = 'tab';
    tabElement.href = tab.url;
    tabElement.target = '_blank';
    tabElement.innerHTML = `
        <img class="favicon" src="${tab.icon}" alt="">
        <span class="title">${tab.title}</span>
        <span class="transform-text">${tab.transform || ''}</span>
    `;

    // Create and append the close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';
    closeButton.onclick = (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the link
        closeTab(index); // Call the closeTab function with the correct index
    };
    tabElement.appendChild(closeButton);

    if (tab.screenshot) {
        const screenshotImg = document.createElement('img');
        screenshotImg.src = tab.screenshot;
        screenshotImg.classList.add('tab-screenshot');
        tabElement.appendChild(screenshotImg);
    }

    return tabElement;
}

function closeTab(index) {
    if (index < 0 || index >= tabs.length) {
        console.error('Invalid index for tab:', index);
        return;
    }

    // Remove the tab from the array
    tabs.splice(index, 1);

    // Re-render the tabs
    renderTabs();
}

function renderTabs() {
    const container = document.getElementById('tabsContainer');
    container.innerHTML = ''; // Clear the container

    tabs.forEach((tab, index) => {
        const tabElement = createTab(tab, index);
        container.appendChild(tabElement);
    });
}


let printEdition = 1; // Initialize the print edition counter

function printCatalog() {
    const catalogWindow = window.open('', '_blank');

    catalogWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
            <title>Your Tab Catalog</title>
            <style>
    @media print {
        @page {
            margin: 0;
        }

        body {
            font-family: "Work Sans", sans-serif;
            margin: 0;
            padding: 4vw;
            background-color: #fff;
        }

        /* Cover Page */
        .cover-page {
            margin-top: 2vh; 
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .cover-page h1 {
            font-size: 6vw;
            margin: 0;
            color: black;
            font-weight: bold;
        }
        
        .cover-page h2 {
            font-size: 3vw;
            margin-top: 5vh;
            color: black;
            font-style: italic;
        }

        .cover-page p {
            font-size: 2.5vw;
            margin-top: 1vh;
            color: black;
        }

        /* Tabs list formatting */
        .tab {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5vh;
            margin-bottom: 3vh;
            padding: 2vw;
            border-bottom: 1px solid #ddd;
            justify-content: center;
            text-align: center;
            page-break-inside: avoid; /* Prevent breaking a tab's content across pages */
        }

        .tab img {
            max-width: 80%;
            max-height: 70vh;
            margin-bottom: 2vh;
        }

        .tab .title {
            font-size: 3vw;
            font-weight: bold;
            color: #333;
            margin-bottom: 1vh;
        }

        .tab .memory-usage {
            font-size: 2vw;
            color: #666;
            margin-top: 1vh;
        }

        .tab .screenshot {
            width: 90%; /* Scale the screenshot width dynamically */
    max-height: 70vh; /* Ensure the screenshot fits in the page */
    margin: 2vh 0;
    object-fit: contain; /* Ensure the screenshot maintains aspect ratio */
    display: block;
    border-radius: 0.5vw;
        }

        /* Adjust screenshots and tab info to fit on one page */
        .tab {
            flex-direction: column; /* Keep column layout */
            align-items: center;   /* Center align the content */
            max-height: 100%; /* Ensure tab and screenshot fit within the page */
        }

        .page-break {
            page-break-before: always;
        }
    }
</style>

        </head>
        <body>
            <div class="cover-page">
                <h1>My Tab Catalog</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div class="bottom-content">
                    <h2>"Untitled" <br /><br />(Portrait of My Opened Tabs)</h2>
                    <p>A personalized edition of my digital collection, crafted on the Tab Manager website</p>
                    <p>Print Edition: ${printEdition}</p>
                </div>
            </div>
            <div class="page-break"></div>
    `);

    // Iterate over tabs and add them to the print content
    tabs.forEach(tab => {
        const memoryUsage = tab.memoryUsage ? `${tab.memoryUsage} MB` : 'N/A';
        catalogWindow.document.write(`
            <div class="tab">
                <img src="${tab.icon}" alt="Favicon">
                <a href="${tab.url}" target="_blank" class="title">${tab.title}</a>
                ${tab.screenshot ? `<img src="${tab.screenshot}" alt="Screenshot" class="screenshot">` : ''}
                <div class="memory-usage">Memory Usage: ${memoryUsage}</div>
            </div>
            <div class="page-break"></div>
        `);
    });

    catalogWindow.document.write(`
        </body>
        </html>
    `);
    catalogWindow.document.close();
    catalogWindow.print();

    // Increment the print edition counter
    printEdition++;
}

