const router = require('express').Router();
const { BlogPost } = require('../../models');


router.get('/', async (req, res) => {
    try{
        if(req.session.user_id){
            const allMyPostsData = await BlogPost.findAll({
                where: {
                    user_id: req.session.user_id
                }
            })
        
            const allMyPosts = allMyPostsData.map((post) => post.get({plain:true}));
        
            res.render('myDashboard', {
                allMyPosts,
                logged_in: req.session.logged_in 
            })
        } else {
            res.redirect('/login');
        }
    } catch (err){
        res.status(500).json({message: 'Internal server error'})
    }
});

router.post('/newPost', async (req, res) => {
    try{
        req.body.user_id = req.session.user_id;
        
        const myBlogPostData = await BlogPost.create(req.body);

        console.log(myBlogPostData);
        req.session.save(() => {
            req.session.user_id = myBlogPostData.user_id;
            req.session.logged_in = true;

                res.status(200).json(myBlogPostData);
        })
    }
    catch(err){
        res.status(400).json(err);
    }
})


// etc

module.exports = router;