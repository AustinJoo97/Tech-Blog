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

const renderComments = async (event) => {const divElement = event.target.closest('div.mainBlogPost');
  const comments = await fetch('/api/myDashboard/viewPost', {
    method: 'POST',
    body: JSON.stringify({ 
        id: divElement.getAttribute('index'),
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  

  if(comments.ok){
    return;
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.newPost').addEventListener('submit', newPostHandler)
document.querySelector('#myDashboard').addEventListener('onclick', getAllOfMyPosts)
document.querySelectorAll('.mainBlogPost').forEach((blogPost) => {
    blogPost.addEventListener('click', renderComments);
})
document.querySelectorAll('.dashBlogPost').forEach((blogPost) => {
    blogPost.addEventListener('click', renderComments)
})