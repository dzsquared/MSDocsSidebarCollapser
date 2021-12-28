function collapseSide() {
    // find class mainContainer
    var bodyContainer = document.getElementsByClassName("columns")[0];
    if (typeof bodyContainer !== 'undefined') {
        var openerHolder = document.createElement("DIV");
        openerHolder.setAttribute("class", "column left-container");
        openerHolder.setAttribute("id", "sidebarHolder");
        openerHolder.innerHTML = "<button class='button link-button' id='docControllerSidebar' data-bi-name='sidebarController' onclick='sidebarButton()' currentSidebar='revealSide' style='margin-bottom: 0.5em;margin-top: 0.5em;'>Show Sidebar</button>";

        $('.left-container').toggle(500);
        bodyContainer.insertBefore(openerHolder, bodyContainer.childNodes[0]);
        $('.primary-holder').animate({ width: '100%' });

        document.getElementById("docController").setAttribute("currentSidebar", "revealSide");
        document.getElementById("docController").innerHTML = "Show Sidebar";
    }
}
function revealSide() {
    document.getElementById("sidebarHolder").remove();
    $('.left-container').toggle(500);
    $('.primary-holder').animate({ width: '75%' });
    document.getElementById("docController").setAttribute("currentSidebar", "collapseSide");
    document.getElementById("docController").innerHTML = "Collapse Sidebar";
    document.getElementById("docControllerSidebar").setAttribute("currentSidebar", "collapseSide");
    document.getElementById("docControllerSidebar").innerHTML = "Collapse Sidebar";
}

function sidebarButton() {
    var currentSidebar = document.getElementById("docController").getAttribute("currentSidebar");
    if (currentSidebar == 'revealSide') {
        revealSide();
    } else {
        collapseSide();
    }
}