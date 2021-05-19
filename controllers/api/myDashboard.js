const router = require('express').Router();
const { BlogPost } = require('../../models');


router.get('/', async (req, res) => {
    try{
        if(req.session.user_id){
            const myBlogPostsData = await BlogPost.findAll({
                where: {
                    user_id: req.session.user_id
                }
            })
        
            const myBlogPosts = myBlogPostsData.map((post) => post.get({plain:true}));
        
            res.render('myDashboard', {
                myBlogPosts,
                logged_in: req.session.logged_in 
            })
        } else {
            res.redirect('/login');
        }
    } catch (err){
        res.status(500).json({message: 'Internal server error'})
    }
});

// router.post('/myDashboard', (req, res) => {
//     try{}
//     catch(err){}
// })

// etc

module.exports = router;