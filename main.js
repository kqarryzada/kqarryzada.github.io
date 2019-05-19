var cursorOn = "$ _";
var cursorOff= "$";
var toggle = false;
function blinkCursor() {
    if(toggle)
        document.getElementById("cursor").innerHTML = cursorOn;
    else
        document.getElementById("cursor").innerHTML = cursorOff;
    toggle = !toggle  
}