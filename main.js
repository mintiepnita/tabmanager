// Function to toggle the visibility of the information overlay
function toggleInfoOverlay() {
    const overlay = document.getElementById('infoOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

// Function to initialize the overlay visibility on page load
window.onload = function() {
    toggleInfoOverlay(); // Show the info overlay when the page loads
};

const defaultTabs = [
    { title: "SAFARI TABS CHEESEBURGER :: Behance", 
        transform: "Project I Never Get Finished With Yet", 
        icon: "https://www.vectorlogo.zone/logos/behance/behance-icon.svg", 
        url: "https://www.behance.net/gallery/61318347/SAFARI-TABS-CHEESEBURGER?tracking_source=search_projects|browser+tabs&l=5",
        screenshot: "screenshot/behance.png",
        memoryUsage: 167},
    { title: "Shopping Cart (5 items)", 
      transform: "Need all this?", 
      icon: "https://www.vectorlogo.zone/logos/ebay/ebay-ar21.svg", 
      url: "https://www.ebay.com",
      screenshot: "screenshot/ebay.png",
      memoryUsage: 115},
    { title: "Facebook (1)", 
      transform: "Endless scroll?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg", 
      url: "https://www.facebook.com", 
      screenshot: "screenshot/facebook.png",
      memoryUsage: 123,},
    { title: "Inbox (24)", 
      transform: "Consider replying?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg", 
      url: "https://mail.google.com",
      screenshot: "screenshot/gmail.png",
      memoryUsage: 313,},
    { title: "Background music 𝄞⨾𓍢ִ໋🎧ྀི", 
      transform: "Just got started?", 
      icon: "https://www.svgrepo.com/show/13671/youtube.svg", 
      url: "https://www.youtube.com",
      screenshot: "screenshot/youtube.png",
      memoryUsage: 213, },
    { title: "(27) Pinterest", 
      transform: "Creativity block?", 
      icon: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg", 
      url: "https://www.pinterest.com/mintiemnt/tab-hoarder-inspo/",
      screenshot: "screenshot/pinterest.png",
      memoryUsage: 233,},
    { title: "Did you know the max number of tabs you can...", 
      transform: "Still scrolling?", 
      icon: "https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg", 
      url: "https://x.com/adhdjesse/status/1585387685983662080",
      screenshot: "screenshot/twitter.png",
      memoryUsage: 120,},
    { title: "THE 10 BEST LATE NIGHT DELIVERY IN SAN FRANCISCO...", 
      transform: "Order takeout?", 
      icon: "https://images.seeklogo.com/logo-png/35/1/uber-eats-logo-png_seeklogo-351557.png?v=638657102710000000", 
      url: "https://www.ubereats.com/category/san-francisco-ca/late-night?srsltid=AfmBOoo5ACSfixX8BlBysO9zz_iBdsB3eJ_8-KRiNjRLWx0hy1-7S0-r",
      screenshot: "screenshot/ubereat.png",
      memoryUsage: 292,},
    { title: "How to Write a Resume That...", 
      transform: "Time to apply?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", 
      url: "https://www.linkedin.com/business/learning/blog/career-success-tips/how-to-write-a-resume-that-will-actually-get-a-recruiter-s-atten",
      screenshot: "screenshot/linkedin.png",
      memoryUsage: 318,},
    { title: "Instagram (2)", 
      transform: "Finding inspo or scrolling feed?", 
      icon: "https://www.cdnlogo.com/logos/i/93/instagram.svg", 
      url: "https://www.instagram.com/p/C1bynb-yXHi/",
      screenshot: "screenshot/instagram.png",
      memoryUsage: 144,}, 
    { title: "Black Friday Deals 2024 | Amazon.com", 
      transform: "Another must-have?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", 
      url: "https://www.amazon.com/blackfriday",
      screenshot: "screenshot/amazon.png",
      memoryUsage: 210,},
    { title: "Reddit", 
      transform: "Any tips to prevent tab hoarding?", 
      icon: "https://www.vectorlogo.zone/logos/reddit/reddit-icon.svg", 
      url: "https://www.reddit.com/r/OperaGX/comments/1ajqbew/any_tips_to_prevent_tab_hoarding_ive_tried/",
      screenshot: "screenshot/reddit.png",
      memoryUsage: 351,},
    { title: "Travel Tuesday - is it real...", 
      transform: "Work Getaway?", 
      icon: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/tripadvisor.svg", 
      url: "https://www.tripadvisor.com/ShowTopic-g1-i12290-k14594932-Travel_Tuesday_is_it_real_Black_Friday_Deals-Bargain_Travel.html",
      screenshot: "screenshot/tripadvisor.png",
      memoryUsage: 496,},
    { title: "Emily in Paris - Netflix", 
      transform: "When to finish?", 
      icon: "https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg", 
      url: "https://www.netflix.com/browse?jbv=81037371",
      screenshot: "screenshot/netflix.png",
      memoryUsage: 467,},
    { title: "BILLIE EILISH TOUR SETLIST...", 
      transform: "Concert AGAIN?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg", 
      url: "https://open.spotify.com/playlist/4n97zFCEjvnGXGVMzUiJlF",
      screenshot: "screenshot/spotify.png",
      memoryUsage: 621,},
    { title: "MARKKRIS BUS (markkris.busofficial)", 
      transform: "Again?", 
      icon: "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/tiktok.svg", 
      url: "https://www.tiktok.com/@marckris.busofficial",
      screenshot: "screenshot/tiktok.png",
      memoryUsage: 230,},
    { title: "Why You Can't Stop Hoarding...",
      transform: "Why?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg", 
      url: "https://medium.com/@focusguru/how-to-increase-focus-and-stay-productive",
      screenshot: "screenshot/medium.png",
      memoryUsage: 168,},
    { title: "ChatGPT", 
      transform: "help AGAIN?", 
      icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", 
      url: "https://chatgpt.com",
      screenshot: "screenshot/chatgpt.png",
      memoryUsage: 157,},
    { title: "Why it pays to declutter your digital life", 
      transform: "Research?", 
      icon: "https://logotyp.us/file/bbc-news.svg", 
      url: "https://www.bbc.com/future/article/20190104-are-you-a-digital-hoarder",
      screenshot: "screenshot/bbc.png",
      memoryUsage: 461,},
    { title: "Web 2 Print (Fall 2024)", 
      transform: "Done yet?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg", 
      url: "https://www.notion.so/Web-2-Print-Fall-2024-7545456a237c4b52b8d6548dae49e769",
      screenshot: "screenshot/notion.png",
      memoryUsage: 262,},
    { title: "The Future of Dream", 
      transform: "Presentation?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", 
      url: "https://www.canva.com/design/DAGYhzx_1ho/I1z9mlTjCbbP0_RxWG0txQ/edit",
      screenshot: "screenshot/canva.png",
      memoryUsage: 113,},   
    { title: "Tab Online Exhibition", 
      transform: "Finalizing mockups?", 
      icon: "https://www.svgrepo.com/show/303210/figma-1-logo.svg", 
      url: "https://www.figma.com/files/recent",
      screenshot: "screenshot/figma.png",
      memoryUsage: 439,},
    { title: "GitHub - hoarder-app / …", 
      transform: "Coding ideas?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", 
      url: "https://github.com/hoarder-app/hoarder",
      screenshot: "screenshot/github.png",
      memoryUsage: 120,},
    { title: "HRKChannel", 
      transform: "Taking a break?", 
      icon: "https://www.svgrepo.com/show/448251/twitch.svg", 
      url: "https://www.twitch.tv/hrkchannel",
      screenshot: "screenshot/twitch.png",
      memoryUsage: 272,},
    { title: "Digital Hoarding", 
      transform: "Research?", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg", 
      url: "https://en.wikipedia.org/wiki/Digital_hoarding",
      screenshot: "screenshot/wikipedia.png",
      memoryUsage: 89.8},
];

// Generate more tabs by repeating the default tabs
let tabs = Array(298).fill(null).map((_, i) => ({
    ...defaultTabs[i % defaultTabs.length]
}));

let clickCount = 0;
const maxDuplication = 5;

function createTabRow(tabsForRow) {
    const row = document.createElement('div');
    row.className = 'tab-row';
    tabsForRow.forEach(tab => {
        row.appendChild(createTab(tab));
    });
    return row;
}

function createTab(tab) {
    const tabElement = document.createElement('a');
    tabElement.className = 'tab';
    tabElement.href = tab.url; // Set the link
    tabElement.target = '_blank'; // Open in a new tab
    tabElement.innerHTML = `
        <img class="favicon" src="${tab.icon}" alt="">
        <span class="title">${tab.title}</span>
        <span class="transform-text">${tab.transform}</span>
        <span class="close" onclick="closeTab(this)">×</span>
    `;
    // Add click handler for duplication (ignores the link itself)
    tabElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains('close')) {
            duplicateTabs();
        }
    });
    return tabElement;
}

function duplicateTabs() {
    if (clickCount >= maxDuplication) return; // Limit duplications
    
    clickCount++;
    
    // Duplicate tabs to both sides
    const currentTabs = [...tabs];
    tabs = [...currentTabs, ...currentTabs, ...currentTabs];
    
    // Adjust container size based on click count
    const container = document.getElementById('tabsContainer');
    const scale = 1 / (clickCount + 0.1); // Reduce size with each duplication
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'center top';
    
    // Adjust tab sizes
    const newTabWidth = 130 * scale;
    document.documentElement.style.setProperty('--tab-width', newTabWidth + 'px');
    
    renderTabs();
}

function renderTabs() {
    const container = document.getElementById('tabsContainer');
    container.innerHTML = '';
    
    const screenWidth = window.innerWidth;
    const tabWidth = 130 / (clickCount + 1); // Adjust tab width based on duplications
    const tabsPerRow = Math.floor(screenWidth / tabWidth) + 2;
    
    for (let i = 0; i < tabs.length; i += tabsPerRow) {
        const rowTabs = tabs.slice(i, i + tabsPerRow);
        container.appendChild(createTabRow(rowTabs));
    }

    if (tabs.length <= 3) {
        document.getElementById('minimalScreen').classList.add('visible');
    }
}

function closeTab(element) {
    const tabElement = element.parentElement;
    const row = tabElement.parentElement;
    const allTabs = Array.from(document.querySelectorAll('.tab'));
    const index = allTabs.indexOf(tabElement);
    tabs.splice(index, 1);
    renderTabs();
}

// Function to get favicon from a URL
function getFavicon(url) {
    try {
        const urlObject = new URL(url);
        // Use Google's favicon service directly - it's more reliable and will get the actual site favicon
        return `https://www.google.com/s2/favicons?domain=${urlObject.hostname}&sz=64`;
    } catch (error) {
        // Fallback to a generic icon if URL parsing fails
        return "https://cdn-icons-png.flaticon.com/512/1042/1042280.png";
    }
}

// Function to get website title
async function getWebsiteTitle(url) {
    try {
        const urlObject = new URL(url);
        const hostname = urlObject.hostname;
        
        // Remove www. and .com/.org/etc, capitalize first letter of each word
        let title = hostname
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

// Function to validate URL
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Toggle the visibility of the add-tab div
function toggleAddTab() {
    const addTabDiv = document.getElementById('addTab');
    if (addTabDiv.style.display === 'none' || addTabDiv.style.display === '') {
        addTabDiv.style.display = 'block'; // Show the add-tab div
    } else {
        addTabDiv.style.display = 'none'; // Hide the add-tab div
    }
}

// Modified addNewTab function
async function addNewTab() {
    const input = document.getElementById('newTabInput');
    let url = input.value.trim();
    
    if (!url) return;
    
    // Add https:// if not present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    if (!isValidUrl(url)) {
        alert("Please enter a valid URL (e.g., example.com or https://example.com)");
        return;
    }
    
    try {
        // Show loading state
        input.disabled = true;
        
        // Get website title and favicon
        const title = await getWebsiteTitle(url);
        const icon = getFavicon(url);
        
        // Add new tab
        tabs.push({
            title: title,
            transform: "Taking a break?",
            icon: icon,
            url: url  // Store the URL for reference
        });
        
        // Clear input and re-enable
        input.value = '';
        input.disabled = false;
        
        // Render updated tabs
        renderTabs();
    } catch (error) {
        console.error('Error adding tab:', error);
        alert('Error adding tab. Please try again.');
        input.disabled = false;
    }
}

// Global variable to store the uploaded screenshot
let uploadedScreenshot = null;

// Preview screenshot when uploaded
function previewScreenshot(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('screenshotPreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
            uploadedScreenshot = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Modify the addNewTab function to include screenshot and memory usage
async function addNewTab() {
    const input = document.getElementById('newTabInput');
    const memoryUsageInput = document.getElementById('memoryUsageInput');
    let url = input.value.trim();
    
    if (!url) return;
    
    // Add https:// if not present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    if (!isValidUrl(url)) {
        alert("Please enter a valid URL (e.g., example.com or https://example.com)");
        return;
    }
    
    try {
        // Show loading state
        input.disabled = true;
        memoryUsageInput.disabled = true;
        
        // Get website title and favicon
        const title = await getWebsiteTitle(url);
        const icon = getFavicon(url);
        
        // Get memory usage
        const memoryUsage = memoryUsageInput.value 
            ? parseFloat(memoryUsageInput.value) 
            : null;
        
        // Add new tab
        tabs.push({
            title: title,
            transform: "Taking a break?",
            icon: icon,
            url: url,
            screenshot: uploadedScreenshot, // Add the uploaded screenshot
            memoryUsage: memoryUsage // Add memory usage
        });
        
        // Clear input and re-enable
        input.value = '';
        memoryUsageInput.value = '';
        input.disabled = false;
        memoryUsageInput.disabled = false;
        
        // Reset screenshot preview
        const preview = document.getElementById('screenshotPreview');
        preview.src = '';
        preview.style.display = 'none';
        uploadedScreenshot = null;
        
        // Render updated tabs
        renderTabs();
        
        // Hide the add tab div
        toggleAddTab();
    } catch (error) {
        console.error('Error adding tab:', error);
        alert('Error adding tab. Please try again.');
        input.disabled = false;
        memoryUsageInput.disabled = false;
    }
}

// Modify the createTab function to show screenshot if available
function createTab(tab) {
    const tabElement = document.createElement('a');
    tabElement.className = 'tab';
    tabElement.href = tab.url; // Set the link
    tabElement.target = '_blank'; // Open in a new tab
    tabElement.innerHTML = `
        <img class="favicon" src="${tab.icon}" alt="">
        <span class="title">${tab.title}</span>
        <span class="transform-text">${tab.transform}</span>
        <span class="close" onclick="closeTab(this)">×</span>
    `;
    
    // Add click handler for duplication (ignores the link itself)
    tabElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains('close')) {
            duplicateTabs();
        }
    });
    return tabElement;
}

function restartExperience() {
    tabs = Array(100).fill(null).map((_, i) => ({
        ...defaultTabs[i % defaultTabs.length]
    }));
    clickCount = 0; // Reset click count
    
    // Reset container scaling
    const container = document.getElementById('tabsContainer');
    container.style.transform = '';
    document.documentElement.style.setProperty('--tab-width', '130px');
    
    document.getElementById('minimalScreen').classList.remove('visible');
    renderTabs();
}

// Initialize
renderTabs();

let printEdition = 1; // To keep track of how many times the catalog has been printed

async function printCatalog() {
    const catalogWindow = window.open('', '_blank');
    
    catalogWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
            <title>Tab Catalog</title>
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
                        margin-top: 2vh; /* Start from the top */
                        text-align: left;
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
                    
                    /* Content to be placed at the bottom */
                    .bottom-content {
                        margin-top: auto; /* Push content to the bottom */
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    /* Tabs list formatting */
                    .tabs-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                        margin: 0;
                    }

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
                    }

                    .tab img {
                        width: 7vw;
                        height: auto;
                        margin-bottom: 2vh;
                        max-width: 20vw; 
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
                    width: 80%; 
                    max-width: 90vw; 
                    margin-top: 2vh;
                    border-radius: 0.5vw;
                    display: block;
                    margin-bottom: 2vh;
                    margin-left: auto;  /* Center the image horizontally */
                    margin-right: auto; /* Center the image horizontally */
                    border-radius: 0.5vw;
                     }

                    .page-break {
                        page-break-before: always;
                    }

                }
            </style>
        </head>
        <body>
            <div class="cover-page">
                <h1>Tab Catalog</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div class="bottom-content">
                    <h2>"Untitled" <br /><br />(Portrait of My Opened Tabs)</h2>
                    <p>A digital collection exploring the phenomenon of tab hoarding</p>
                    <p>Print Edition: ${printEdition}</p>
                </div>
            </div>
            <div class="page-break"></div>
    `);

    // Iterate over the tabs and add the information
    tabs.forEach(tab => {
        // Use the `memoryUsage` property from the tab object
        const memoryUsage = tab.memoryUsage ? tab.memoryUsage : 'N/A'; // Default to 'N/A' if memoryUsage is not defined
        catalogWindow.document.write(`
            <div class="tab">
                <img src="${tab.icon}" alt="">
                <a href="${tab.url}" target="_blank" class="title">${tab.title}</a>
                ${tab.screenshot ? `<img src="${tab.screenshot}" alt="Screenshot" class="screenshot">` : ''}
                <div class="memory-usage">Memory Usage: ${memoryUsage} MB</div>
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

    // Increment print edition number after printing
    printEdition++;
}

// Function to open the customize tab page
function openCustomizeTab() {
    window.open('customize.html', '_blank');
}