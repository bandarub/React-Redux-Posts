import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Types from "../actions";

import Form from "./Form";

class Edit extends Component {
  constructor(props) {
    super(props);
    const id = Number(props.match.params.postId);
    const selectedPost = props.getSelectedPost(id);
    this.state = {
      id: id,
      title: selectedPost.title || "",
      category: selectedPost.category || "",
      detail: selectedPost.detail || ""
    };
  }
  handlePost = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleUpdate = () => {
    const { id } = this.state;
    this.props.updated_post(this.state, id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Form {...this.state} handlePost={this.handlePost} />
        <div className="buttonsGrp">
          <button onClick={this.handleUpdate}>Update</button>
        <button
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Cancel
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newdata: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updated_post: (data, id) => dispatch({ type: Types.UPDATE_POST, data, id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
