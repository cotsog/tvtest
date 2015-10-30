function getDocument(url) {
    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() {
        pushDoc(templateXHR.responseXML);
    }, false);
    templateXHR.open("GET", url, true);
    templateXHR.send();
    return templateXHR;
}

function pushDoc(document) {
    navigationDocument.pushDocument(document);
}

App.onLaunch = function(options) {
    var templateURL = 'https://www.dropbox.com/s/gp7a7lnodyg69ew/alertTemplate.tvml?dl=1';
    getDocument(templateURL);
}

App.onExit = function() {
    console.log('App finished');
}