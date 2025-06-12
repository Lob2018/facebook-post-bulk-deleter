# 🚮 facebook-post-bulk-deleter (updated May 28, 2025)

**Description:**  
This JavaScript script (to be pasted into the browser's developer console) allows Facebook users to mass delete their posts by automating the deletion process.

## Features

- Automatic deletion of posts in a loop.
- Option to specify the `aria-label` of the options menu and the position of the targeted post in the list of posts.
- Manual stop option to halt the deletion process if needed.
- Cleans the recycle bin and deletes photos associated with the posts.
- The script runs by default for 5 minutes.

## Usage Instructions

1. Log in to your Facebook account.
2. Navigate to the Activity Log and select "Posts and comments in groups."
3. Click on "Posts" to view your posts.
4. Open the browser console (Ctrl + Shift + I for Chrome, Edge, Firefox and Opera).
5. To find the `aria-label` of the options menu:
   - Inspect the post you want to target by right-clicking on it and selecting "Inspect."
   - Look for the `aria-label` attribute in the HTML code of the post. It will look something like this: `aria-label="Options d’action"`.
6. Paste the script into the console.
7. Start the script by specifying the `aria-label` of the options menu and the position of the first post to delete (e.g., `startInterval("Options d’action", 1)`).
8. To stop the script manually, use `stopInterval()`.

**Note:** Use this script with caution, as it will permanently delete your posts. Ensure to empty the Trash after running the script and delete any associated photos to remove related posts. Always adhere to Facebook's terms of service when using this script.
