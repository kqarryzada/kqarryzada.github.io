// Web links
const email = "mailto:khalid.qarryzada@gmail.com";
const linkedInURL = "https://www.linkedin.com/in/khalid-qarryzada/";
const githubURL = "https://github.com/kqarryzada";
const repoURL ="https://github.com/kqarryzada/kqarryzada.github.io";
const stkOverflowURL ="https://stackoverflow.com/users/11386070/kqarryzada?tab=profile";

// Cursor logic
const cursorOn = "$ _";
const cursorOff = "$";
let toggle = false;

function blinkCursor() {
    if(toggle)
        document.getElementById("cursor").innerHTML = cursorOn;
    else
        document.getElementById("cursor").innerHTML = cursorOff;
    toggle = !toggle  
}

function openEmail() {
    window.open(email);
}

function openLinkedIn() {
    window.open(linkedInURL);
}

function openGithub() {
    window.open(githubURL);
}

function openWebSourceCode() {
    window.open(repoURL);
}

function openStackOverflow() {
    window.open(stkOverflowURL);
}

function main() {
    // Every 0.5s, make the cursor "blink"
    setInterval(function() {
        blinkCursor()
    }, 500);
}


main();
