let commentId = 0;

function addComment(parentId = null) {
    const commentText = parentId ? document.getElementById(`reply-input-${parentId}`).value : document.getElementById('main-comment').value;
    if (commentText.trim() === "") return;

    const commentSection = parentId ? document.getElementById(`replies-${parentId}`) : document.getElementById('comments-section');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.id = `comment-${commentId}`;

    commentDiv.innerHTML = `
        <div class="comment-text" id="text-${commentId}">${commentText}</div>
        <div class="comment-actions">
            <button onclick="replyComment(${commentId})">Reply</button>
            <button onclick="editComment(${commentId})">Edit</button>
            <button onclick="deleteComment(${commentId})">Delete</button>
        </div>
        <div id="replies-${commentId}" class="reply-section"></div>
    `;

    commentSection.appendChild(commentDiv);

    if (parentId) {
        document.getElementById(`reply-input-${parentId}`).value = "";
    } else {
        document.getElementById('main-comment').value = "";
    }

    commentId++;
}

function replyComment(id) {
    const replyInput = document.createElement('div');
    replyInput.classList.add('comment-input');
    replyInput.id = `reply-input-container-${id}`;
    replyInput.innerHTML = `
        <input type="text" id="reply-input-${id}" placeholder="Write a reply...">
        <button onclick="addComment(${id})">Reply</button>
    `;

    const repliesSection = document.getElementById(`replies-${id}`);
    if (!document.getElementById(`reply-input-container-${id}`)) {
        repliesSection.appendChild(replyInput);
    }
}

function editComment(id) {
    const commentTextDiv = document.getElementById(`text-${id}`);
    const currentText = commentTextDiv.innerText;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = currentText;
    editInput.id = `edit-input-${id}`;

    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.onclick = () => saveEdit(id);

    commentTextDiv.innerHTML = '';
    commentTextDiv.appendChild(editInput);
    commentTextDiv.appendChild(saveButton);
}

function saveEdit(id) {
    const newText = document.getElementById(`edit-input-${id}`).value;
    const commentTextDiv = document.getElementById(`text-${id}`);
    commentTextDiv.innerHTML = newText;
}

function deleteComment(id) {
    const commentDiv = document.getElementById(`comment-${id}`);
    commentDiv.remove();
}
