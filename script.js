console.log("Hello, World!");

// Variable to track number of clicks
let clicks = 0;

// Variable to store the click display h1
let clickDisplay = document.getElementById("click-display");

// Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

// call each timetime image is clicked
function handleClick() {
    console.log("The potato was clicked!");
    // add one to click count
    clicks = clicks + 1
    // update the click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;
}

