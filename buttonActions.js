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

function breakHeaderFilename(contentdisposition) {
    console.log(contentdisposition);
    let filename = "";
    if (contentdisposition) {
        filename = contentdisposition.split("filename=")[1];
    }
    if (filename == "" || filename == null) {
        filename = "Notebook.ipynb";
    }
    return filename;
}


function defaultNotebook(originUrl) {
    // find the edit button and get the href
    var editButton = document.getElementById("contenteditbtn");
    var url = editButton.children[0].href;
    let newBody = { originUrl: url };

    // send post request and download response file
    fetch('https://doc-notebook-generator.azurewebsites.net/api/MarkdownToNotebook?code=D9PKNudb8hB63ozsrBc4/mFyi5A/pvXjQ96dhulqxHusCXLw2aaGWw==', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBody)
        }).then(async response => ({
            filename: breakHeaderFilename(response.headers.get('Content-Disposition')),
            filetype: "application/vnd.jupyter",
            fileblob: await response.blob()
        })).then(fileobject => {
            const newBlob = new Blob([fileobject.fileblob], { type: fileobject.filetype });
            var url = window.URL.createObjectURL(newBlob);
            var a = document.createElement('a');
            a.href = url;
            a.download = fileobject.filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
}