let changeWidth = document.getElementById('changeWidthButton');

// chrome.storage.sync.get('size', function(data) {
//     //changeWidth.style.backgroundColor = data.color;
//     changeWidth.setAttribute('value', 'fullWidth');
//   });

changeWidth.onclick = function(element) {
    //let scriptTE = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "jquery.js"}, function() {
              chrome.tabs.executeScript(
                  tabs[0].id,
                  {file: 'fullWidth.js'}
                  );
          });
    });
};

let expandRight = document.getElementById('expandButton');
expandRight.onclick = function(element) {
    //let scriptTE = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "jquery.js"}, function() {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {file: 'expandBack.js'}
                    );
            });
    });
  };
