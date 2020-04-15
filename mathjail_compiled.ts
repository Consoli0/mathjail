"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var logFile = fs_1.createWriteStream('./mathjail.txt');
var debug = (process.argv[2] === 'debug');
var log = function (v, debugLog) {
    if (debugLog === true && debug === false)
        return;
    var o = v; // output so we don't modify original
    o = o.map(function (d) { return (d ? 1 : 0); });
    logFile.write(o.join('') + "\n");
};
var logSplit = function (data, debugLog) {
    if (debugLog === true && debug === false)
        return;
    logFile.write("-----===" + ((data !== undefined) ? "+ " + data + " +" : '+') + "===-----\n");
};
logSplit('Initializing array with 100 false values', true);
var cells = new Array(100).fill(false);
logSplit('Begin Initial array valus', true);
log(cells);
logSplit('End Initial array values', true);
var guardRun = function (guardNumber) {
    cells.forEach(function (v, i) {
        if ((i % guardNumber) === 0)
            cells[i] = !v;
    });
};
logSplit('Begin');
for (var i = 1; i < 101; i++) {
    logSplit("Now executing staff number " + i, true);
    guardRun(i);
    log(cells);
}
logSplit('End');
logSplit('Begin Final array values', true);
log(cells, true);
logSplit('End Final array values', true);
