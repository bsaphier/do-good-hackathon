import React from 'react';
import axios from 'axios';
import { changeSearchText } from '../react/actions';
import store from '../react/store';

export default class Search extends React.Component {
  constructor (){
    super();
    this.state = {
      search: '',
    };
  }

  render(){
    return (
      <div>
        <div>
          <span>Search:</span>
          <input
          type='text'
          value={this.state.search}
          onChange={evt => {
            const action = changeSearchText(evt.target.value);
            dispatch(action);
          }} />
        </div>
        <ul>
          {props.allPosts.filter(post => {
            if (props.search === '') return true;
            return post.includes(props.search);
             }).map(post => {
              return (
              <li key={post.title}>
                <Link to={`/post/${post.title}`}>
                  {post.title}
                </Link>
              </li>
              );
          })}
        </ul>
      </div>
    )
  }
}