chrome.runtime.onInstalled.addListener(function() {
    // chrome.storage.sync.set({size: 'fullWidth'}, function() {
    //   console.log("collapsed");
    // });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'docs.microsoft.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });