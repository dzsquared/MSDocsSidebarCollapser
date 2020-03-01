function collapseSide() {
    $('.left-container').toggle(500);
    $('.primary-holder').animate({ width: '100%' });
    document.getElementById("docController").setAttribute("currentSidebar", "revealSide");
    document.getElementById("docController").innerHTML = "Show Sidebar";
}
function revealSide() {
    $('.left-container').toggle(500);
    $('.primary-holder').animate({ width: '75%' });
    document.getElementById("docController").setAttribute("currentSidebar", "collapseSide");
    document.getElementById("docController").innerHTML = "Collapse Sidebar";
}

function sidebarButton() {
    var currentSidebar = document.getElementById("docController").getAttribute("currentSidebar");
    if (currentSidebar == 'revealSide') {
        revealSide();
    } else {
        collapseSide();
    }
}