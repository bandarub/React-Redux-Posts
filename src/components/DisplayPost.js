import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  NavLink
}from 'react-router-dom';

class DisplayPost extends Component{
 
  render(){
    const id = Number(this.props.match.params.postId);
    const selctedPost = this.props.getPost(id);
    console.log(selctedPost);
    return(<div>
      <NavLink to='/'>Back to Posts</NavLink>
      <div>
      <div  className='post-read ' >  
      <p className="post-heading"><label>Title:</label> {selctedPost.title}</p>
      <p className="post-heading"><label>category:</label>  {selctedPost.category}</p>
      <p className="post-text"> <label>Detail:</label>{selctedPost.detail}</p>
      </div>
      <div>
      <button id= {id}><NavLink   to={`/posts/${ selctedPost.id}/edit`}>Edit</NavLink></button>
      <button  onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: id })}><NavLink id= {id} to='/'>Delete</NavLink></button>
      </div>
  </div>
    </div>)}
  }

export default connect() (DisplayPost);