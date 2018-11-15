import React, { Component } from "react";
import { connect } from "react-redux";
import * as Types from "../Actions";

class Form extends Component {
  constructor(props) {
    super(props);
    let id, selectedPost;
    if (this.props.action === "edit") {
      id = Number(this.props.match.params.postId);
      selectedPost = this.props.getSelectedPost(id);
    }
    this.state = {
      title: this.props.action === "add" ? "" : selectedPost.title,
      category: this.props.action === "add" ? "" : selectedPost.category,
      detail: this.props.action === "add" ? "" : selectedPost.detail,
      isTouched: {
        title: this.props.action === "add" ? false : true,
        category: this.props.action === "add" ? false : true,
        detail: this.props.action === "add" ? false : true
      }
    };
  }
  handlePost = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFocus = e => {
    const field = e.target.name;
    this.setState(prevState => ({
      isTouched: {
        ...prevState.isTouched,
        [field]: true
      }
    }));
  };
  handleCategory = e => {
    this.setState({ category: e.target.value });
  };
  handleSubmit = e => {
    const action = this.props.action;
    const id =
      action === "edit"
        ? Number(this.props.match.params.postId)
        : new Date().getUTCMilliseconds();
    e.preventDefault();
    const newPost = { ...this.state, id, action };
    this.props.new_post(newPost);
    this.props.history.push("/");
  };
  categoryExists = category => {
    let arr = this.props.posts;
    return arr.some(function(el) {
      return el.category === category;
    });
  };
  validate = (title, category, detail) => {
    const errors = {
      title: /^[\w+\s]{2,30}$/.test(title)
        ? ""
        : "Please enter Title(must not excced 30 words)",
      category: /^[\w+\s]{2,30}$/.test(category)
        ? ""
        : "Please enter Category(must not exceed 20 words)",
      detail: /^[\w+\s]{2,150}$/.test(detail) ? "" : "Please Enter your Post"
    };
    return errors;
  };
  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };
  render() {
    const { title, category, detail } = this.state;
    const { posts } = this.props;
    let arr = posts.map(post => {
      return post.category;
    });
    let unique_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) == -1) {
        unique_array.push(arr[i]);
      }
    }
    const errors = this.validate(title, category, detail);
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <input
            value={title}
            type="text"
            className="input"
            name="title"
            placeholder="Title"
            onChange={this.handlePost}
            onBlur={this.handleFocus}
          />
          <label>Title</label>
          {(this.state.isTouched.title ||
            (this.state.isTouched.title && errors.title)) && (
            <span className="errorMsg">{errors.title}</span>
          )}
        </div>
        <div>
          <select
            className="selectMenu"
            onChange={this.handleCategory}
            value={category}
          >
            {this.props.action === "add" && (
              <option value="category">--Category--</option>
            )}
            {unique_array.map(category => (
              <option value={category}>{category}</option>
            ))}
            <option value="Other">Other</option>
          </select>
          {(category === "Other" || category !== "") &&
            !this.categoryExists(category) && (
              <input
                name="category"
                type="text"
                className="input"
                placeholder="New Category"
                onChange={this.handleCategory}
                onBlur={this.handleFocus}
              />
            )}
          {this.state.isTouched.category && errors.category && (
            <span className="errorMsg">{errors.category}</span>
          )}
        </div>
        <div>
          <textarea
            rows="10"
            value={detail}
            name="detail"
            placeholder="Write your Post"
            className="textArea"
            onChange={this.handlePost}
            onBlur={this.handleFocus}
          />
          <label>Write your Post</label>{" "}
          {this.state.isTouched.detail && errors.detail && (
            <span className="errorMsg">{errors.detail}</span>
          )}
        </div>
        <div className="btnGrp">
          <button type="submit" disabled={this.isSubmitDisabled(errors)}>
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    new_post: data => dispatch(Types.savePost(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
