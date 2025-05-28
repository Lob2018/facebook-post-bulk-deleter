/*
    Instructions for using the Facebook post deletion script:

    Overview:
    This script allows for bulk deletion of posts on Facebook by automating the process.

    Steps to follow:

    1. Log in to your Facebook account.
    2. Go to Activity Log via the options.
    3. Select "Posts and comments in groups."
    4. Click on "Posts" on the left to view your posts.
    5. Open the browser console by pressing CTRL+SHIFT+I.
    6. Paste the script into the console.

    Commands to execute in the console:
    
    - To start the script for 5 minutes, specify:
        - The `aria-label` of the options menu (e.g., "Options d’action" in France).
        - The position of the post (e.g., 1 for the first post).
        - Command: 
          ```javascript
          startInterval("Options d’action", 1);
          ```

    - To stop the script manually:
        - Command: 
          ```javascript
          stopInterval();
          ```

    Notes:
    - Please ensure to empty the Trash after running the script.
    - Deleting photos will also result in the deletion of associated posts.
    - Use this script responsibly and adhere to Facebook's terms of service.
*/

// Variable to store the deletion interval ID
let intervalId;

// Function to simulate a key press
function simulateKey(key, eventType = 'keydown') {
    return new Promise((resolve) => {
        // Create a keyboard event
        const event = new KeyboardEvent(eventType, {
            key: key,
            bubbles: true,
            cancelable: true
        });
        // Dispatch the event on the active element
        document.activeElement.dispatchEvent(event);
        resolve();
    });
}

// Function to simulate a sequence of key presses
async function simulateKeySequence() {
    await simulateKey('Enter');    // Simulates pressing 'Enter'
    await delay(100);               // Delay of 100 ms
    await simulateKey('ArrowUp');   // Simulates pressing the up arrow
    await delay(50);                // Delay of 50 ms
    await simulateKey('Enter');     // Simulates pressing 'Enter' again
    await delay(100);               // Delay of 100 ms
    await simulateKey('Tab');       // Simulates pressing 'Tab'
    await delay(50);                // Delay of 50 ms
    await simulateKey('Enter');     // Simulates pressing 'Enter'
    await delay(200);               // Delay of 200 ms
}

// Function to create a specified delay in milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to select a post and simulate key presses
async function selectPostAndSimulateKeys(ariaLabel, position) {
    // Select all posts with the specified aria-label
    const posts = document.querySelectorAll(`div[aria-label="${ariaLabel}"]`);
    console.log(posts);
    
    // Check if the post at the specified position exists
    if (posts.length >= position) {
        const post = posts[position - 1]; // Select the post at the given position
        post.focus(); // Focus on the post
        console.log("Focus set on the post options with aria-label=" + ariaLabel);
        await simulateKeySequence(); // Simulate the key sequence
    } else {
        console.log(`No post found with aria-label="${ariaLabel}" at position ${position}`);
    }
}

// Function to start the deletion process
function startInterval(ariaLabel, position) {
    // Start an interval that calls the selection function at regular intervals
    intervalId = setInterval(async () => {
        await selectPostAndSimulateKeys(ariaLabel, position);
    }, 600);

    // Stop the interval after 5 minutes (300000 ms)
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Interval automatically stopped after 5 minutes");
    }, 300000);
}

// Function to manually stop the deletion process
function stopInterval() {
    clearInterval(intervalId); // Stop the interval
    console.log("Interval stopped manually");
}