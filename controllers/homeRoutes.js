const router = require('express').Router();
const { User, BlogPost } = require('../models');
const isAuthorized = require('../utils/auth');


router.get('/', isAuthorized, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
            order: [['date_created', 'DESC']]
        });
    
        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        
        blogPosts.forEach(async (post) => {
            let posterData = await User.findByPk(post.user_id);
            poster = posterData.get({plain:true});
            post.user = poster.name;
        })
    
        res.render('homepage', { 
            blogPosts, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
  
module.exports = router;