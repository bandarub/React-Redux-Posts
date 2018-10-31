export const POSTS_INDEX = "POSTS_INDEX";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";


export const createPost = newPost => {
  return {
    type: CREATE_POST,
    newPost
  };
};

export const deletePost = deletedId => {
  return {
    type: DELETE_POST,
    deletedId
  };
};

export const updatePost = data => {
  return {
    type: UPDATE_POST,
    data
  };
};
