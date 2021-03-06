import { GET_ALL_POSTS, CREATE_NEW_POST, SELECTED_POST } from './actions';

const initialState = {
  allPosts: [],
  selectedPost: {},
  createdPost: {}
}

export default function (state = initialState, action){

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_ALL_POSTS:
      newState.allPosts = action.allPosts;
      break;

    case SELECTED_POST:
      newState.selectedPost = action.selectedPost;
      break;

    case CREATE_NEW_POST:
      newState.createdPost = action.createdPost;
      break;

    default:
      return state;
  }

  return newState;
}