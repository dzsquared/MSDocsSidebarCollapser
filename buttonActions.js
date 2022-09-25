function collapseSide() {
    // find class mainContainer
    var bodyContainer = document.getElementsByClassName("columns")[0];
    if (typeof bodyContainer !== 'undefined') {
        var openerHolder = document.createElement("DIV");
        openerHolder.setAttribute("class", "column left-container");
        openerHolder.setAttribute("id", "sidebarHolder");
        openerHolder.innerHTML = "<div class='position-fixed display-flex flex-direction-column'><button class='button link-button' id='docControllerSidebar' data-bi-name='sidebarController' onclick='sidebarAction(1)' currentSidebar='revealSide' style='margin-bottom: 0.5em;margin-top: 0.5em;'><span aria-hidden='true' class='docon docon-arrow-right'></span></button></div>";

        $('.left-container').toggle(500);
        bodyContainer.insertBefore(openerHolder, bodyContainer.childNodes[0]);
        $('.primary-holder').animate({ width: '100%' });

        if (document.getElementById("docController") != null) {
            document.getElementById("docController").setAttribute("currentSidebar", "revealSide");
            document.getElementById("docController").innerHTML = "<span aria-hidden='true' class='docon docon-arrow-right'></span> Show Sidebar";
        }
    }
}
function revealSide() {
    document.getElementById("sidebarHolder").remove();
    $('.left-container').toggle(500);
    $('.primary-holder').animate({ width: '75%' });
    if (document.getElementById("docController") != null) {
        document.getElementById("docController").setAttribute("currentSidebar", "collapseSide");
        document.getElementById("docController").innerHTML = "<span aria-hidden='true' class='docon docon-arrow-left'></span> Collapse Sidebar";
    }
}

function sidebarButton() {
    var currentSidebar = document.getElementById("docController").getAttribute("currentSidebar");
    if (currentSidebar == 'revealSide') {
        revealSide();
    } else {
        collapseSide();
    }
}

function sidebarAction(direction) {
    if (direction == 1) {
        revealSide();
    } else {
        collapseSide();
    }
}