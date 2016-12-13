import React from 'react';
import axios from 'axios';

export default class PostForm extends React.Component {
  constructor (){
    super();
    this.state = {
      title: '',
      personDescrip: '',
      date: '',
      location: '',
      scamDescrip: '',
      tags: '',
      message: '',
    };
  }

  render () {

    const convertTags = tags => tags.split(', ');

    return (
      <div>
        <div>
          <span>Title:</span>
          <input
            type='text'
            value={this.state.title}
            onChange={evt => {
              this.setState({
                title: evt.target.value
              })
            }} />
        </div>
        <div>
          <span>Describe the scammer:</span>
          <input
            type='text'
            value={this.state.personDescrip}
            onChange={evt => {
              this.setState({
                personDescrip: evt.target.value
              })
            }} />
        </div>
        <div>
          <span>Date of incident:</span>
          <input
            type='text'
            value={this.state.date}
            onChange={evt => {
              this.setState({
                date: evt.target.value
              })
            }} />
        </div>
        <div>
          <span>Location of incident:</span>
          <input
            type='text'
            value={this.state.location}
            onChange={evt => {
              this.setState({
                location: evt.target.value
              })
            }} />
        </div>
        <div>
          <span>Describe what happened:</span>
          <input
            type='text'
            value={this.state.scamDescrip}
            onChange={evt => {
              this.setState({
                scamDescrip: evt.target.value
              })
            }} />
        </div>
        <div>
          <span>Tags (e.g. Broadway, Hair, Lunchtime):</span>
          <input
            type='text'
            value={this.state.tags}
            onChange={evt => {
              this.setState({
                tags: evt.target.value
              })
            }} />
        </div>
        <div>
          <button onClick={evt => {
            axios
            .post('/api/post', {
              title: this.state.title,
              personDescrip: this.state.personDescrip,
              date: this.state.date,
              location: this.state.location,
              scamDescrip: this.state.scamDescrip,
              tags: convertTags(this.state.tags)
            })
            .then(() => {
              this.setState({
                title: '',
                personDescrip: '',
                date: '',
                location: '',
                scamDescrip: '',
                tags: '',
                message: `${this.state.title} has been posted!`,
              });
              setTimeout(() => {
                this.setState({
                  message: ''
                });
              }, 2000);
            })
            .catch(() => {});
          }}>Submit!</button>
          <span>{this.state.message}</span>
        </div>
      </div>
    )
  }
}
