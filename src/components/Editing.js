import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class Edit extends Component{
  constructor(props){
    super(props);
    console.log(props)
    const id = Number(props.match.params.postId);
  
    const selectedPost = props.getPost(id);
    console.log('selectedPost', selectedPost)
    this.state = {    
      id:id,
      title: selectedPost.title || '',
      category: selectedPost.category ||'',
      detail:selectedPost.detail || ''  
      } 
    }
 
    
    handlePost = (e)=>{
      console.log(e.target.id);
      this.setState({[e.target.name]:e.target.value})

    }
  
render(){
 
    const {id} = this.state;
   
  return(<div>
    
      <label>Title:</label> <input  id= {id} type='text' value={this.state.title} name='title' onChange={this.handlePost} />
      <label>Category:</label> <input id= {id}  value={this.state.category} onChange={this.handlePost} type='text' name='category'/><br/>
      <textarea className='text-area' id= {id} value = {this.state.detail} onChange={this.handlePost} name='detail'/>
      
      <button  onClick={()=>this.props.updated_post(this.state, id)}><NavLink to='/'>Update</NavLink></button>
      <button><NavLink to='/'>Cancel</NavLink></button>
   </div>)
}  
}

const mapStateToProps = state => {
	return {
		newdata: state
	};
};
const mapDispatchToProps = dispatch => {
	return {
        updated_post: (data,id) => dispatch({ type: 'UPDATE_POST', data ,id})
        
	};
};


export default connect(mapStateToProps,mapDispatchToProps) (Edit);



