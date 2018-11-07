import { initState } from "../data.js";
import * as Types from "../Actions";

export const reducer = (state = initState.posts, action) => {
  switch (action.type) {
    case Types.SAVE_POST:
      if (action.post.action === "add") {
        return [...state.concat(action.post)];
      } else {
        return state.map(post => {
          console.log(action.post);
          if (post.id === action.post.id) {
            return {
              ...post,
              title: action.post.title,
              category: action.post.category,
              detail: action.post.detail
            };
          } else return post;
        });
      }
    case Types.DELETE_POST:
      return state.filter(post => post.id !== action.deletedId);

    default:
      return state;
  }
};
