import React from "react";

import { Link } from 'react-router-dom';


const PostIndex = props => {
  const { post } = props;
  return (
    <ul className="small-post">
    <li className="post-title">{post.title} </li>
    <li className="post-category"> #{" "}{post.category} </li>
    <p>{post.detail.slice(0, 50)}...</p>
    <Link to={`posts/${post.id}`}>Read More</Link>
    </ul>

  );
};

export default PostIndex;
