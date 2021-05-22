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

const renderComments = () => {
  console.log('RENDER COMMENTS HAS BEEN TRIGGERED')
  console.log(this.id);
}

document.querySelector('.newPost').addEventListener('submit', newPostHandler)
document.querySelector('#myDashboard').addEventListener('onclick', getAllOfMyPosts)
document.querySelector('.mainBlogPost').addEventListener('onclick', renderComments)
document.querySelector('.dashBlogPost').addEventListener('onclick', renderComments)