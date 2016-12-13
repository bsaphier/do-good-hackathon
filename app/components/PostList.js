import React, { Component } from 'react';
import PostComponent from './Post';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    const { allPosts } = this.state;

    return (
      <div>
        <h2>Posts</h2>
        <div className="post-list">
          {
            allPosts.map(post => (
              <div key={post.id} className="list-group-item">
                <PostComponent post={post} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts // not sure if this is what we want
});

export default connect(mapStateToProps)(PostList);
