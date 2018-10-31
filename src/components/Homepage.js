import React, { Component } from "react";
import { Link } from 'react-router-dom';

import PostIndex from "./PostIndex";


class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Link to="/newpost" className="postRight" >Add Post</Link>
        <div className="postSummery">
          {posts.map(post => (
            <PostIndex key={post.id} post={post} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
