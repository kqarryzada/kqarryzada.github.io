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

// Makes it possible to see the link in bottom left when hovering over an icon
function setupHref() {
    // set "target" property to "_blank" to open links in a new tab
    const blank = "_blank";

    let e = document.getElementById("emailIcon");
    e.href = emailLink;
    e.target = blank;

    let linkedin = document.getElementById("linkedInIcon");
    linkedin.href = linkedInURL;
    linkedin.target = blank;

    let git = document.getElementById("githubIcon");
    git.href = githubURL;
    git.target = blank;

    let repo = document.getElementById("repoIcon");
    repo.href = repoURL;
    repo.target = blank;

    let so = document.getElementById("SOIcon");
    so.href = stkOverflowURL;
    so.target = blank;
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
