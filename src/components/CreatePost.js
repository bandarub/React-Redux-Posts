import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink }from 'react-router-dom';


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
        new_post: (data,id) => dispatch({ type: 'CREATE_POST', data ,id})
        
	};
};

export default connect(
	mapStateToProps,mapDispatchToProps
)(Createpost);

// class CreatePost extends Component {
//     constructor(props){
//         super(props);
        
//         const id = 
//             (this.props.match.params.id
//             ? Number(this.props.match.params.id)
//             :  Math.floor(Math.random() * 1000 + 5));
        
//         const getPost = this.props.getPost(id);

//         // const title = getPost ? getPost(id).title : '';
//         // const category = getPost ? getPost(id).category : '';
//         // const content = getPost ? getPost(id).content : '';
//         // this.state = {
//         //     id,
//         //     title,
//         //     category,
//         //     detail
//         // }
//     }
//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.name]: e.target.value
//     //     })
//     // }

//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const newPost = {...this.state, id: Math.floor(Math.random() * 1000 + 5)};
//     //     this.props.submitPost(newPost);
//     //     this.props.history.push('/');
//     // }

//     // handleSubmitCancel = () => {
//     //     this.props.history.push('/');
//     // }

//     // handleEdit = (e) => {
//     //     e.preventDefault();
//     //     const post = {...this.state};
//     //     this.props.editPost(post);
//     //     this.props.history.push('/posts/' + this.state.id);
//     // }

//     // handleEditCancel = () => {
//     //     this.props.history.push('/posts/' + this.state.id);
//     // }

//     render(){
//         // const {action} = this.props;
//         return (<div></div>
//             // <form>
//             //     <div className='title'>
//             //         <label>Title: </label>
//             //         <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
//             //     </div>
//             //     <div className='category'>
//             //         <label>Category: </label>
//             //         <input type='text' name='category' value={this.state.category} onChange={this.handleChange} />
//             //     </div>
//             //     <div className='content'>
//             //         <label>Write new post: </label>
//             //         <textarea rows='5' name='content' value={this.state.content} onChange={this.handleChange}></textarea>
//             //     </div>
//             //     <button type='submit' onClick={this[`handle${action}`]} >Save</button>
//             //     <button type='button' onClick={this[`handle${action}Cancel`]}>Cancel</button>
//             // </form>
//          )
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         submitPost: (newPost) => dispatch({type: 'SUBMIT_POST', newPost}),
//         editPost: (editPost) => dispatch({type: 'EDIT_POST', editPost})
//     }
// }

// export default connect(null, mapDispatchToProps)(CreatePost);