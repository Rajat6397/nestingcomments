Nested Comments System
A simple Nested Comments System built with HTML, CSS, and JavaScript, allowing users to add comments, reply to comments, edit existing comments, and delete comments. This project demonstrates the use of DOM manipulation, event handling, and basic styling.

Features
Add Main Comment: Users can add new comments.
Reply to Comment: Users can reply to any comment.
Edit Comment: Users can edit any existing comment.
Delete Comment: Users can delete any comment and its associated replies.
Nested Replies: Supports multi-level nested replies.
Technologies Used
HTML: Structure of the webpage.
CSS: Styling of the webpage.
JavaScript: Logic for handling comments and replies.
Project Structure
graphql
Copy code
nested-comments-system/
├── index.html    # Main HTML file
├── style.css     # Styling file
├── script.js     # JavaScript file for logic
└── README.md     # Project documentation
Getting Started
Clone the repository or download the source code:

bash
Copy code
git clone https://github.com/your-username/nested-comments-system.git
Open the project:

Open the index.html file in your web browser to see the nested comments system in action.
Usage
Adding a Main Comment:
Enter your comment in the input box at the bottom and click "Comment".
Replying to a Comment:
Click the "Reply" button below a comment. A new input box will appear to add your reply.
Editing a Comment:
Click the "Edit" button. The comment will be replaced by an input box where you can edit the text. Click "Save" to save changes.
Deleting a Comment:
Click the "Delete" button. The comment (and its replies, if any) will be removed.
Code Explanation
HTML (index.html)
The main structure of the nested comments system, including the container for displaying comments and the input box for adding a new comment.
CSS (style.css)
Provides basic styling for the comment container, input fields, buttons, and nested replies.
JavaScript (script.js)
Handles the core functionalities:
addComment(): Adds a new main comment or reply.
replyComment(): Adds an input box for replying to a comment.
editComment(): Allows the user to edit a comment.
saveEdit(): Saves the edited comment.
deleteComment(): Deletes a comment and its replies.
Example
Here's a sample UI with nested comments:

less
Copy code
Nested Comments
---------------------------
User 1: This is a main comment.
    └─ User 2: This is a reply to the main comment.
        └─ User 3: This is a nested reply.
Future Improvements
Persist Comments: Store comments using localStorage or a backend database.
Enhanced Styling: Improve the user interface and experience with better styling.
Validation: Add input validation for empty comments.
Pagination: Load comments in a paginated manner for better performance with large comment threads.
