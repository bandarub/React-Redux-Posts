import { initState } from "./data.js";
import * as Types from "./actions";

export const reducer = (state = initState.posts, action) => {
  switch (action.type) {
    case Types.CREATE_POST:
      return [...state.concat(action.data)];
	case Types.DELETE_POST:
      return state.filter(post => post.id !== action.deletedId);
    case Types.UPDATE_POST:
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.title,
            category: action.data.category,
            detail: action.data.detail
          };
        } else return post;
      });
    default:
      return state;
  }
};
