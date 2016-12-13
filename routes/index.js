const Tag = require('../db/models').Tag;
const Post = require('../db/models').Post;
const router = require('express').Router();

router.get('/posts', (req, res, next) => {
  Post.findAll()
  .then(posts => res.send(posts))
  .catch(next)
});

router.post('/posts', (req, res, next) => {
  Post.create({
    where: {
      title: req.body.title,
      personDescrip: req.body.personDescrip,
      date: req.body.date,
      location: req.body.location,
      scamDescrip: req.body.scamDescrip
    }
  })
  .catch(next)
});

module.exports = router;
