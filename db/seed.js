const db = require('../db');
const Post = require('../db/models').Post;
const Tag = require('../db/models').Tag;
const posts = require('./seedFile').posts;
const tags = require('./seedFile').tags;
const Promise = require('bluebird');

// seed functions

const seedPost = () => db.Promise.each(posts, post => db.model('post').create(post));
const seedTag = () => db.Promise.each(tags, tag => db.model('tag').create(tag));

// associate
const getRandom = (items) => items[Math.floor(Math.random() * items.length)];

const associatePostsAndTags = () => {
  const findingPosts = Post.findAll({});
  const findingTags = Tag.findAll({});
  Promise.all([findingPosts, findingTags])
  .spread(function(foundPosts, foundTags) {
    foundPosts.forEach(post => post.addTags([getRandom(foundTags), getRandom(foundTags), getRandom(foundTags)]))
  })
  .catch(error => console.error(error))
}


db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedPost)
  .then(posts => console.log(`Seeded ${posts.length} posts OK`))
  .then(seedTag)
  .then(tags => console.log(`Seeded ${tags.length} tags OK`))
  .then(associatePostsAndTags)
  .then(() => console.log(`Associated posts and tags`))
  .catch(error => console.error(error))
  .finally(() => {console.log('All done!')})
