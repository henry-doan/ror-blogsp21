import { Component } from 'react';

class Blog extends Component {

  render() {
    const { id, title, cat } = this.props.location.state
    return (
      <>
        <h1>{title}</h1>
        <p>Category: {cat}</p>
        <p>posts:</p>
      </>
    )
  }
}

export default Blog;