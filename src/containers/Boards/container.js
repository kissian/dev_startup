import React, { Component } from 'react';
import BoardContainer from './presenter.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      profileImage: '',
      likeCount: '',
      like: '',
      showComment: '',
      title: '',
      date: '',
      from: '',
      history: '',
      whether: '',
      comments: [],
    }
  }
  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const createboardDate = {
      ...this.state
    }
  }

  render(){
    const {
      handleChange,
      handleSubmit,
    } = this;
  
    return (
      <BoardContainer 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
  }

}

export default Container;