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
        sidebarButton.innerHTML = "<button class='button link-button font-size-sm' id='docController' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='collapseSide'><span aria-hidden='true' class='docon docon-arrow-left'></span> Collapse Sidebar</button>"
        pageMetadata.insertBefore(sidebarButton, pageMetadata.childNodes[0]);
    }

    // prepend a button to the sidebar
    var sidebar = document.getElementById("affixed-left-container");
    if (typeof sidebar !== 'undefined') {
        var sidebarButton = document.createElement("DIV");
        sidebarButton.setAttribute("class", "border-bottom flex-shrink-0");
        sidebarButton.setAttribute("id", "sidebarButtonHolder");
        sidebarButton.innerHTML = "<button class='button button-clear button-sm is-full-width display-block padding-left-none padding-right-none border-none is-text-left' id='docControllerSidebar' data-bi-name='sidebarController' onclick='sidebarAction(0)' currentSidebar='collapseSide'><span class='icon font-size-xs has-text-subtle'><span aria-hidden='true' class='docon docon-arrow-left'></span></span><span> Collapse Sidebar <span class='tag is-text is-small is-rounded margin-left-xxs'>Extension</span></span></button>"

        var defaultNotebookButton = document.createElement("DIV");
        defaultNotebookButton.setAttribute("class", "border-bottom flex-shrink-0");
        defaultNotebookButton.setAttribute("id", "defaultNotebookButtonHolder");
        defaultNotebookButton.innerHTML = "<button class='button button-clear button-sm is-full-width display-block padding-left-none padding-right-none border-none is-text-left' id='defaultNotebookButton' data-bi-name='defaultNotebookButton' onclick='defaultNotebook()'><span class='icon font-size-xs has-text-subtle'><span aria-hidden='true' class='docon docon-book-solid'></span></span><span> Download Notebook <span class='tag is-text is-small is-rounded margin-left-xxs'>Extension</span></span></button>"

        $(window).on('load', function() {
            sidebar.append(sidebarButton);

            // if there is no edit button don't add the default notebook button
            // also limit to md files
            // find the edit button and get the href
            var editButton = document.getElementById("contenteditbtn");
            if (editButton) {
                var url = editButton.children[0].href;
                // if url is a markdown file
                if (url.endsWith(".md")) {
                    sidebar.append(defaultNotebookButton);
                }
            }
        });

    }
}

setupDocs();