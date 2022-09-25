function setupDocs() {
    // add jquery 
    var jq = document.createElement('script');
    jq.src = chrome.runtime.getURL('jquery.js');
    (document.head || document.documentElement).appendChild(jq);

    try {
        expandTOC();
    } catch (e) {
        console.log("Error expanding TOC: ");
        console.log(e);
    }

    try {
        // add a script element for the button actions JS
        var s = document.createElement('script');
        s.src = chrome.runtime.getURL('buttonActions.js');
        s.onload = function() {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);

        // append a button to the sidebar
        var sidebar = document.getElementById("affixed-left-container");
        if (sidebar != null && typeof sidebar !== 'undefined') {
            // prepend a button to the page metadata area
            var pageMetadata = document.getElementsByClassName("page-metadata")[0];
            if (typeof pageMetadata !== 'undefined') {
                var sidebarButton = document.createElement("LI");
                sidebarButton.innerHTML = "<button class='button link-button font-size-sm' id='docController' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='collapseSide'><span aria-hidden='true' class='docon docon-arrow-left'></span> Collapse Sidebar</button>"
                pageMetadata.insertBefore(sidebarButton, pageMetadata.childNodes[0]);
            }

            var sidebarButton = document.createElement("DIV");
            sidebarButton.setAttribute("class", "border-bottom flex-shrink-0");
            sidebarButton.setAttribute("id", "sidebarButtonHolder");
            sidebarButton.innerHTML = "<button class='button button-clear button-sm is-full-width display-block padding-left-none padding-right-none border-none is-text-left' id='docControllerSidebar' data-bi-name='sidebarController' onclick='sidebarAction(0)' currentSidebar='collapseSide'><span class='icon font-size-xs has-text-subtle'><span aria-hidden='true' class='docon docon-arrow-left'></span></span><span> Collapse Sidebar <span class='tag is-text is-small is-rounded margin-left-xxs'>Extension</span></span></button>"

            $(window).on('load', function() {
                sidebar.append(sidebarButton);
            });

        }
    } catch (e) {
        console.log("Error adding sidebar button: ");
        console.log(e);
    }
}

function expandTOC() {
    // <nav id="side-doc-outline" data-bi-name="intopic toc" role="navigation" aria-label="Article Outline"><!---->
    var tocNav = document.getElementById("side-doc-outline");

    // find all class expandable children
    var expandableChildren = tocNav.getElementsByClassName("expandable");
    for (var i = 0; i < expandableChildren.length; i++) {
        // add class is-expanded to all expandable children
        expandableChildren[i].classList.add("is-expanded");
    }

    // find the child button
    var expandButton = tocNav.getElementsByClassName("button");
    for (var i = 0; i < expandButton.length; i++) {

        // set aria-expanded to true and remove label
        expandButton[i].setAttribute("aria-expanded", "true");
        var buttonText = expandButton[i].getElementsByClassName("show-more-text");
        for (var j = 0; j < buttonText.length; j++) {
            buttonText[j].innerHTML = "";
        }
    }
}

setupDocs();
