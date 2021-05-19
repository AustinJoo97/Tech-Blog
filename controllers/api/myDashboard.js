const router = require('express').Router();
const { BlogPost } = require('../../models');

router.get('/myDashboard', async (req, res) => {
    const myBlogPostsData = await BlogPost.findAll({
        where: {
            user_id: this.user_id
        }
    })

    const myBlogPosts = myBlogPostsData.map((post) => post.get({plain:true}));

    res.render('myDashboard', {
        myBlogPosts,
        logged_in: req.session.logged_in 
    });

// router.post('/myDashboard', (req, res) => {
//     try{}
//     catch(err){}
// })

// etc