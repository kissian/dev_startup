import React, { Component } from 'react';
import BlogCard from './container';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    }
  }

  onMouseOver = (e) => {
    this.setState({
      more: !this.state.more
    })
  }
  render() {
    const { onMouseOver } = this;
    const { more } = this.state;
    return (
      <BlogCard 
        onMouseOver={onMouseOver}
        more={more}
      />
    )
  }
}

export default Container;