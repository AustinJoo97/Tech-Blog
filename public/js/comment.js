addComment = async (event) => {
    event.preventDefault();

    const newComment = document.getElementById('comment-input').value.trim();

    const newCommentEntry = await fetch(`/api/myDashboard/comment`, {
        method: 'POST',
        body: JSON.stringify({ 
            comment_text: newComment,
            post_id: document.getElementById('comment-input').dataset.post_id
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(newCommentEntry.ok){
        document.location.reload();
    } else {
        alert(newCommentEntry.statusText);
    }
}

document.getElementById('addNewComment').addEventListener('submit', addComment);