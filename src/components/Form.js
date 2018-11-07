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
      title:this.props.action==="add"?" ":selectedPost.title,
      category: this.props.action==="add"?" ":selectedPost.category,
      detail: this.props.action==="add"?" ":selectedPost.detail,
      isTouched: {
        title: this.props.action==="add"? false:true,
        category: this.props.action==="add"? false:true,
        detail: this.props.action==="add"? false:true
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

  handleSubmit = e => {
    console.log(this.props);
    const action = this.props.action;
    console.log(action)
    const id= action === "edit"? Number(this.props.match.params.postId) :new Date().getUTCMilliseconds()
    e.preventDefault();
    const newPost = {...this.state,id,action}
    this.props.new_post(newPost);
    this.props.history.push("/");
  };

  validate = (title, category, detail) => {
    const errors = {
      title: /^[\w.|\s|]{2,20}$/.test(title)
        ? ""
        : "please enter Title(must not excced 20 words)",
      category: /^[\w.|\s]{2,20}$/.test(category)
        ? ""
        : "please enter Category(must not exceed 20 words)",
      detail: /[\w]+[|\s.][\w]+$/.test(detail) ? "" : "please enter datails"
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
    const errors = this.validate(title, category,detail);
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Title"
            onChange={this.handlePost}
            onBlur={this.handleFocus}
          />
          <label>Title</label>
          {this.state.isTouched &&
            (this.state.isTouched.title && errors.title) && (
              <span className="errorMsg">{errors.title}</span>
            )}
        </div>
        <div>
          <input
            type="text"
            value={this.state.category}
            name="category"
            placeholder="Category"
            onChange={this.handlePost}
            onBlur={this.handleFocus}
          />
          <label>Category</label>
          {this.state.isTouched &&
            (this.state.isTouched.category && errors.category) && (
              <span className="errorMsg">{errors.category}</span>
            )}
        </div>
        <div>
          <textarea
            rows="10"
            value={this.state.detail}
            name="detail"
            placeholder="Write your Post"
            className="text-area"
            onChange={this.handlePost}
            onBlur={this.handleFocus}
          />
          <label>Write your Post</label>{" "}
          {this.state.isTouched &&
            (this.state.isTouched.detail && errors.detail) && (
              <span className="errorMsg">{errors.detail}</span>
            )}
        </div>
        <div className="btn-grp">
            <button type="submit" className="save" disabled={this.isSubmitDisabled(errors)}>
              Save
            </button>
            <button
              type="button"
              className="cancel"
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

const mapStateToProps = (state,props) => {
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
