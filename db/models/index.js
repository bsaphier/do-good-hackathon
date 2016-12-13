const Post = require('./model')
const Tag = require('./model')

Post.belongsToMany(Tag, {through: 'PostTag'});
Tag.belongsToMany(Post, {through: 'PostTag'});


Post.addScope('defaultScope', {
  include: {model: Tag}
}, {
  override: true
})
