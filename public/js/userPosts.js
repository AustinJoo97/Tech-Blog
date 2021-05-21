const newPostHandler = async (event) => {
    event.preventDefault();

    const newPost = document.querySelector('#blogPost').value.trim();

    console.log(newPost);

    if(newPost.length === 0 || !newPost){
        return;
    }

    if (newPost) {
      const response = await fetch('/api/myDashboard/newPost', {
        method: 'POST',
        body: JSON.stringify({ 
            post_text: newPost
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

document.querySelector('.newPost').addEventListener('submit', newPostHandler)
document.querySelector('#myDashboard').addEventListener('onclick', getAllOfMyPosts)