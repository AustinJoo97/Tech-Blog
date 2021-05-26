const newPostHandler = async (event) => {
    event.preventDefault();

    const newPostTitle = document.querySelector('#blogPostTitle').value.trim();
    const newPostText = document.querySelector('#blogPostText').value.trim();

    if(newPostTitle.length === 0 || newPostText.length === 0 || !newPostTitle || !newPostText){
        return;
    }

    if (newPostTitle && newPostText) {
      const response = await fetch('/api/myDashboard/newPost', {
        method: 'POST',
        body: JSON.stringify({ 
            post_title: newPostTitle,
            post_text: newPostText,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        getAllOfMyPosts();
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    } 
};

const getAllOfMyPosts = async () => {
    const allMyPostsData = await fetch('api/myDashboard');

    if(allMyPostsData.ok){
        return;
    } else {
        alert(response.statusText)
    }
}

const deletePost = async (event) => {
  const post_id = event.target.getAttribute('index')

  const postToDelete = await fetch(`/api/myDashboard/delete/${post_id}`, {
    method: 'DELETE',
  })

  if(postToDelete.ok){
    document.location.reload();
  } else {
    alert('Failed to delete post!')
  }
}


document.querySelector('.newPost').addEventListener('submit', newPostHandler)
document.querySelector('#myDashboard').addEventListener('click', getAllOfMyPosts)
document.querySelector('.deleteButton').addEventListener('click', deletePost);