const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');


router.get('/', async (req, res) => {
    try{
        if(req.session.user_id){
            const allMyPostsData = await BlogPost.findAll({
                where: {
                    user_id: req.session.user_id
                },
                order: [['date_created', 'DESC']]
            })
        
            const allMyPosts = allMyPostsData.map((post) => post.get({plain:true}));
        
            res.render('myDashboard', {
                allMyPosts,
                logged_in: req.session.logged_in,
                user_id: req.session.user_id
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

        res.status(200).json(myBlogPostData);
    }
    catch(err){
        res.status(400).json(err);
    }
})


router.get('/viewPost/:id', async (req, res) => {
    try{
        const postData = await BlogPost.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        });

        
        const commentsData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        });

        const post = postData.get({plain: true});
        const comments = [];

        commentsData.forEach((comment) => {
            comments.push(comment.get({plain: true}));
        })

        const testObj = {
            post,
            comments,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        }

        res.render('postComments', {
            post,
            comments,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        })
    }
    catch(err){
        res.status(400).json(err);
    }
})

router.post('/comment', async (req, res) => {
    try{
        req.body.user_id = req.session.user_id;

        const newCommentData = Comment.create(req.body);

        res.status(200).json(newCommentData);
    } catch(err){
        res.status(400).json(err);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try{
        const deletePost = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if (!deletePost) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }
      
        res.status(200).json(deletePost);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;