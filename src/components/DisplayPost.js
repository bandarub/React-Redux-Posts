import React from "react";
import { connect } from "react-redux";
import * as Types from "../Actions";

import Navigation from "./Navigation";

const DisplayPost = props => {
  const id = Number(props.match.params.postId);
  const selctedPost = props.getSelectedPost(id);
  const handleDelete = () => {
    props.getPostDelete(id);
    props.history.push("/");
  };
  return (
    <div >
      <Navigation/>
      <div className="full-post">
        <h4>Title</h4>
        <p>{selctedPost.title}</p>
        <h4>Category</h4>
        <p>{selctedPost.category}</p>
        <h4>Content</h4>
        <p>{selctedPost.detail}</p>
        <div>
          {/* <NavLink to={`/posts/${selctedPost.id}/edit`}>Edit</NavLink>  */}
          <button
            id={id}
            onClick={() => {
              props.history.push(`/posts/${selctedPost.id}/edit`);
            }}
          >
            Edit
          </button>
          <button id={id} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getPostDelete: deletedId => {
      dispatch(Types.deletePost(deletedId));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(DisplayPost);
