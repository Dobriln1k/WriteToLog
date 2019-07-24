/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();

        window.addEventListener('keydown', function(evt) {
            if(evt.shiftKey) {
                csInterface.evalScript('WriteToLog()');
            }
        })
    }
        
    init();

}());
    
