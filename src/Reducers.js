import { initState } from './data.js';
import * as Types from './actions';


export const reducer = (state = initState.posts, action) => {
	switch (action.type) {
		case Types.POSTS_INDEX:
						return [...state, ...action.data];
		case Types.CREATE_POST:
						const newPost={
							id:action.data.id,				
							title:action.data.title,
							category:action.data.category,
							detail:action.data.detail
						}
						if(newPost.title!==''&& newPost.category!==''&& newPost.detail!=='' )
						{
						const newState = [...state.concat(newPost)];
						return newState;}
						else
						{alert('enter valid inputs')}
						break;
		case Types.DELETE_POST:
						return state.filter(post=>post.id !== action.id
						);
		case Types.UPDATE_POST:
						return state.map((post) => {
						if (post.id === action.id) {
							console.log(action.data)
						return {
						...post,
						title: action.data.title,
						category: action.data.category,
						detail:action.data.detail,
						
						}}
						else return post;
						})			
		default:
			return state;
	}
};
