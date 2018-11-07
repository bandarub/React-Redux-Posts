export const DELETE_POST = "DELETE_POST";
export const SAVE_POST = "SAVE_POST";

export const savePost = post => {
  return {
    type: SAVE_POST,
    post
  };
};

export const deletePost = deletedId => {
  return {
    type: DELETE_POST,
    deletedId
  };
};

