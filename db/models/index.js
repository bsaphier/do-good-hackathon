const Post = require('./Post')
const Tag = require('./Tag')

Post.belongsToMany(Tag, {through: 'PostTag'});
Tag.belongsToMany(Post, {through: 'PostTag'});


Post.addScope('defaultScope', {
  include: {model: Tag}
}, {
  override: true
})

module.exports = {
    Post,
    Tag
}
