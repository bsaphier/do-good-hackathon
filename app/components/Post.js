import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class Post extends Component {
	

  render() {
	const onePost = props.posts;
			

      return (
        	<div>
        		<div className="col-xs-4" >
                <h1>{onePost.date}</h1>
                </div>
              	<div className="col-xs-4" >
                <h2>{onePost.title}</h2>
                </div>
                <div className="col-xs-4" >
                <p>{onePost.scamDescrip}</p>
                <p>{onePost.personDescrip}</p>
                </div>
        	</div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({

// })

// export default connect(mapDispatchToProps)(Post)

