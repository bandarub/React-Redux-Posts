import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink }from 'react-router-dom';
import * as Types from '../actions';



class Createpost extends Component{
   
   
   state = {
            id:new Date().getUTCMilliseconds(),
            title:'',
            category:'',
            detail:'',
         
            } 
   handlePost=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    render(){ 
        return(<div>
            <h4>New Post</h4>
                <div>
                    <label>Title:</label> <input  type='text' value={this.title} name='title' onChange={this.handlePost}/>
                    <label>Category:</label> <input   value={this.category} onChange={this.handlePost} type='text' name='category'/><br/>
                    <textarea className='text-area' onChange={this.handlePost} name='detail'/>
                </div>
                <div className="buttons">
                    {this.state.title!==''|| this.state.category!=='' || this.state.detail !== ''
                    ?<button onClick={()=>{this.props.new_post(this.state)}}><NavLink to='/'>Save</NavLink></button>
                    :<button onClick={()=>{this.props.new_post(this.state)}}>Save</button>}
                    <button><NavLink to='/'>Cancel</NavLink></button>
                </div>
        </div>)
    }
 
}
const mapStateToProps = state => {
	return {
		data: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
        new_post: (data,id) => dispatch({ type: Types.CREATE_POST, data ,id})
        
	};
};

export default connect(
	mapStateToProps,mapDispatchToProps
)(Createpost);

