/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                
        var fs = require('fs');

// Определение браузера
var browser;
var userAgent = navigator.userAgent;
var nav = navigator;
if (userAgent.indexOf("Firefox") > -1) {
  browser = "Mozilla Firefox";
} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
  browser = "Opera";
} else if (userAgent.indexOf("Trident") > -1) {
  browser = "Microsoft Internet Explorer";
} else if (userAgent.indexOf("Edge") > -1) {
  browser = "Microsoft Edge";
} else if (userAgent.indexOf("Chrome") > -1) {
  browser = "Google Chrome or Chromium";
} else if (userAgent.indexOf("Safari") > -1) {
  browser = "Apple Safari";
} else {
  browser = "unknown";
}
// Определение браузера

// Определение Windows
var wind;
var agent = navigator.userAgent.toLowerCase();
if (agent.indexOf("windows nt 5.0") > -1) wind = "ОС: Windows 2000";
if (agent.indexOf("windows nt 5.1") > -1) wind = "ОС: Windows  ХР";
if (agent.indexOf("windows nt 5.2") > -1) wind = "ОС:  Windows Server 2003";  
if (agent.indexOf("windows nt 6.0") > -1) wind = "ОС:  Windows Vista";
if (agent.indexOf("windows nt 6.1") > -1) wind = "ОС:  Windows 7";
if (agent.indexOf("windows nt 6.2") > -1) wind = "ОС:  Windows 8";
if (agent.indexOf("windows nt 6.3") > -1) wind = "ОС:  Windows 8.1";
if (agent.indexOf("windows nt 10.0") > -1) wind = "ОС:  Windows 10";
// Определение Windows

var info = [
    "Windows:" + wind + " \r",
    "Browser:" + browser + " \r",
    "Language:" + nav.language + " \r",
    "Screen Width:" + screen.width + " \r",
    "Screen Height:" + screen.height + " \r",
    "AppName:" + nav.appName + " \r",
    "UserAgent:" + nav.userAgent + " \r"
];

    window.addEventListener('keydown', (evt) => {
                if(evt.keyCode == '16') {
                fs.writeFile('AEsviewer_debug.txt', '', (error) => {
                    console.log(`Error during parsing file \n ${error} \n Function: ${error.syscall} \n Reason: ${error.code}`);
                });
                for(var elem of info) {
                fs.appendFile("AEsviewer_debug.txt", elem + "\n", (error) => {
                    console.log(`Error during parsing file \n ${error} \n Function: ${error.syscall} \n Reason: ${error.code}`);
                })
            }
        }
    });


    }
        
    init();

}());
    
