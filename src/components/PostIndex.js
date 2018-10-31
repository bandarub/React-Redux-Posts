import React from "react";

import { Link } from 'react-router-dom';


const PostIndex = props => {
  const { post } = props;
  return (
    <Link exact='true' to={`posts/${post.id}`} className="small-post">      
      <label id={post.id}>{post.title} </label>
      <label id={post.id}>{post.category}</label>
    </Link>
  );
};

export default PostIndex;
