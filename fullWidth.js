function setupDocs() {
    // add a script element for the button actions JS
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('buttonActions.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);

    // prepand a button to the page metadata area
    var pageMetadata = document.getElementsByClassName("page-metadata")[0];
    if (typeof pageMetadata !== 'undefined') {
        var sidebarButton = document.createElement("LI");
        sidebarButton.innerHTML = "<button class='button is-small' id='docController' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='collapseSide'>Collapse Sidebar</button>"
        pageMetadata.insertBefore(sidebarButton, pageMetadata.childNodes[0]);
    }
}
setupDocs();