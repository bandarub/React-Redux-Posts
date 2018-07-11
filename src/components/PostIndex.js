import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostIndex extends Component {
    handleClick=(e)=>{ 
        this.props.history.push(`/posts/${this.props.post.id}`)
    }
    render(){
        return(<div className='small-post' id={this.props.post.id} onClick={this.handleClick} key={this.props.post.id}>
            <label id={this.props.post.id}  >{this.props.post.title} </label>
            <label id={this.props.post.id} >{this.props.post.category}</label>
            </div>)
    }   
}
export default connect() (PostIndex);
