var page = require('webpage').create(),
    system = require('system'), address

var success = true;
var testLen = 10000; // in ms

page.onConsoleMessage = function(msg) {
    console.log("Console Message: " + msg);
};

page.onError = function(msg) {
    console.log("page.onError: " + msg);
    success = false;
};

phantom.onError = function(msg) {
    console.log("phantom.onError: " + msg);
    trace.forEach(function(item) {
    console.log(' ', item.file, ":", item.line);
    });
    success = false;
};

page.onResourceError = function(resourceError) {
    console.err('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
    console.err('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
    success = false;
};

page.onAlert = function (msg) {
    console.log("Alert: " + msg);
};

if (system.args.length === 1) {
    console.log('Usage: someScript <some URL>');
    phantom.exit();
}

address = system.args[1];

try {
    console.info("Test started with length: " + testLen + " milliseconds");
    page.open(address, function(status) {

        setTimeout(function() {
            console.log("Test ended.");
            if(!success) {
                console.log("TEST FAIL");
                phantom.exit(1);
            }
            else {
                console.log("TEST SUCCESS");
                phantom.exit(0);
            }
        },testLen);
    });
} catch (err) {
    console.log("Exception caught: " + err);
}
