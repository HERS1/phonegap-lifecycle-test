var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = "pen";
var value = "blue";

windows.localStorage.setItem (key, value );
window.localStorage.getItem(key);

//eventlistener
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
//eventlistener listens for resume or pause
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
	alert(key);
    }

//on pause function alerts pause onto screen
    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	
//function alerts resume when called 
    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
