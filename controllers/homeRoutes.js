const router = require('express').Router();
const { User, BlogPost } = require('../models');
const ishAuthorized = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in){
            // Get all blogPosts
            const blogPostData = await BlogPost.findAll({
              include: [
                  {
                      model: User,
                      attributes: ['name'],
                  },
              ]
            });
        
            // Serialize data so the template can read it
            const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
            
            blogPosts.forEach(async (post) => {
                let posterData = await User.findByPk(post.user_id);
                poster = posterData.get({plain:true});
                post.user = poster.name;
                // console.log(blogPost)
            })
        
            // Pass serialized data and session flag into template
            res.render('homepage', { 
              blogPosts, 
              logged_in: req.session.logged_in 
            });
        } else {
            res.render('login')
        }
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