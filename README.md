# Microsoft Docs Sidebar Collapser: Edge/Chrome Extension

Edge/Chrome extension that enables the table of contents sidebar on https://learn.microsoft.com to be collapsed.

## Functionality
A button is automatically added to pages within https://learn.microsoft.com.
The button allows the left sidebar to be collapsed/expanded, creating more room to read the content.

## Installation
### Option 0: Install from the Chrome Web Store/Microsoft Edge Store
- Edge: https://microsoftedge.microsoft.com/addons/detail/hnjdejdpeeojbipggdjdpfdcononmbpn
- Chrome: https://chrome.google.com/webstore/detail/gbjnfidofpopojdljkkmkgfnlibpeiff

### Option 1: Load Unpacked (Chrome/Edge)
0. This method requires enabling developer mode in *chrome://extensions* or *edge://extensions* on your workstation
1. Download/clone this repository to your machine
2. Open *chrome://extensions* or *edge://extensions* and click *Load Unpacked*
3. Select the root folder for the repository

### Option 2: Download the .crx file (Chrome-only)
0. This methods requires enabling developer mode in *chrome://extensions* on your workstation
1. Go to https://github.com/dzsquared/MSDocsSidebarCollapser/releases and download the latest release
2. Open *chrome://extensions* and drag the downloaded crx file onto the page

## See it in action

![Collapse and Expand](/images/example.gif)


## Contributors:
Thanks to [@BrunoBlanes](https://github.com/BrunoBlanes) for adding jQuery to the extension after it was removed from MS Docs.

## Release Notes
### v2.3.0
- Adds *learn.microsoft.com* to the supported URLs
- Automatically expands the right table of contents ("show more") on load

### v2.2.1
- Adds jQuery

### v2.2
- Adds a button to the page for expanding/collapsing
