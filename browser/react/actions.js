import axios from 'axious';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const SELECTED_POST = 'SELECTED_POST';


export const getAllPosts = posts => ({
    type: GET_ALL_POSTS,
    allPosts: posts
});

export const createNewPost = post => ({
    type: CREATE_NEW_POST,
    createdPost: post
});

export const selectedPost = post => ({
    type: SELECTED_POST,
    currentPost: post
});

export const getPosts = () => {
  return dispatch => {
    axios.get('/api/posts')
      .then(response => {
        dispatch(getAllPosts(response.data))
      })
  }
}

export const createPost = () => {
  return dispatch => {
    axios.post('/api/posts')
      .then(response => {
        dispatch(createNewPost(response.data))
      })
  }
}

export const getPostsById = postId => {
  return dispatch => {
    axios.get(`/api/posts/${postId}`)
      .then(response => {
        dispatch(selectedPost(response.data));
      });
  };
};