// Web links
const emailLink = "mailto:khalid.qarryzada@gmail.com";
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
    window.open(emailLink);
}

function openLinkedIn() {
    window.open(linkedInURL);
}

function openGithub() {
    window.open(githubURL);
}

function openRepo() {
    window.open(repoURL);
}

function openStackOverflow() {
    window.open(stkOverflowURL);
}

// Makes it possible to see the link in bottom left when hovering over an icon
function setupHref() {
    document.getElementById("emailIcon").href = emailLink;
    document.getElementById("linkedInIcon").href = linkedInURL;
    document.getElementById("githubIcon").href = githubURL;
    document.getElementById("repoIcon").href = repoURL;
    document.getElementById("SOIcon").href = stkOverflowURL;
}

function main() {
    window.onload = function() {
        setupHref();
    }

    // Every 0.5s, make the cursor "blink" asynchronously
    setInterval(function() {
        blinkCursor()
    }, 500);
}


main();
