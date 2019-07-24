/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/
function WriteToLog() {
	var fs = require('fs');

var info = [
    "Current OS is:" + system.osName + " \r",
    "OS version:" + system.osVersion + " \r",
    "User Name:" + system.userName + " \r",
    "Computer Name:" + system.machineName + " \r",
    "Active Viewer:" + app.activeViewer + " \r",
    "AE Version:" + app.version + " \r",
    "AE Language:" + app.isoLanguage + " \r",
    "Screen Width:" + screen.width + " \r",
    "Screen Height:" + screen.height + " \r",
/*  "Windows:" + wind + " \r",*/
/*  "Browser:" + browser + " \r",*/
/*  "Language:" + nav.language + " \r",*/
/*  "AppName:" + nav.appName + " \r",*/
/*  "UserAgent:" + nav.userAgent + " \r"*/
];
				fs.writeFile('C:/Users/' + system.userName + '/Desktop/AEsviewer_debug.txt', '', function(error) {
                    /* console.log(`Error during parsing file \n ${error} \n Function: ${error.syscall} \n Reason: ${error.code}`);*/
                    console.log("Error during parsing file \n" + error + "\nFunction: " + error.syscall + "\nReason: " + error.code);
                });
                for(var i=0; i<info.length; i++) {
                fs.appendFile("C:/Users/" + system.userName + "/Desktop/AEsviewer_debug.txt", info[i] + "\n", function(error) {
                    /* console.log(`Error during parsing file \n ${error} \n Function: ${error.syscall} \n Reason: ${error.code}`);*/
                    console.log("Error during parsing file \n" + error + "\nFunction: " + error.syscall + "\nReason: " + error.code);
                })
            }
} 