# facebook-post-bulk-deleter

**Description:**  
This JavaScript script allows Facebook users to bulk delete their posts from their account. By automating the deletion process, this script makes it easy to manage post history, enabling users to quickly and efficiently clean up unwanted content. (Updated May 28, 2025)

## Features

- Automatic deletion of posts in a loop.
- Option to specify the `aria-label` of the options menu and the position of the targeted element in the list of posts.
- Manual stop option to halt the deletion process if needed.
- Cleans the recycle bin and deletes photos associated with the posts.

## Usage Instructions

1. Log in to your Facebook account.
2. Navigate to the Activity Log and select "Posts and comments in groups."
3. Click on "Posts" to view your posts.
4. Open the browser console (CTRL+SHIFT+I).
5. To find the `aria-label` of the options menu:
   - Inspect the element you want to target by right-clicking on it and selecting "Inspect."
   - Look for the `aria-label` attribute in the HTML code of the element. It will look something like this: `aria-label="Action options"`.
6. Paste the script into the console.
7. Start the script by specifying the `aria-label` of the options menu and the position of the first element to delete (e.g., `startInterval("Action options", 1)`).
8. To stop the script manually, use `stopInterval()`.

**Note:** Use this script with caution, as it will permanently delete your posts. Ensure to empty the Trash after running the script and delete any associated photos to remove related posts. Always adhere to Facebook's terms of service when using this script.