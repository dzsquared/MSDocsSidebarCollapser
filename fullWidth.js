function setupDocs() {
    // add jquery 
    var jq = document.createElement('script');
    jq.src = chrome.runtime.getURL('jquery.js');
    (document.head || document.documentElement).appendChild(jq);

    // add a script element for the button actions JS
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('buttonActions.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);

    // prepend a button to the page metadata area
    var pageMetadata = document.getElementsByClassName("page-metadata")[0];
    if (typeof pageMetadata !== 'undefined') {
        var sidebarButton = document.createElement("LI");
        sidebarButton.innerHTML = "<button class='button link-button' id='docController' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='collapseSide' style='margin-bottom: 0.5em;margin-top: 0.5em;'>Collapse Sidebar</button>"
        pageMetadata.insertBefore(sidebarButton, pageMetadata.childNodes[0]);
    }

    // prepend a button to the sidebar
    var sidebar = document.getElementsByClassName("left-container")[0];
    if (typeof sidebar !== 'undefined') {
        var sidebarButton = document.createElement("DIV");
        // sidebarButton.setAttribute("class", "column left-container");
        sidebarButton.setAttribute("id", "sidebarButtonHolder");
        sidebarButton.innerHTML = "<button class='button is-small' id='docControllerSidebar' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='collapseSide' style='margin-bottom: 0.5em;margin-top: 0.5em;'>Collapse Sidebar</button>"
        sidebar.insertBefore(sidebarButton, sidebar.childNodes[0]);
    }
}
setupDocs();
