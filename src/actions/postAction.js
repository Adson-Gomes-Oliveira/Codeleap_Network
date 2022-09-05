import { CREATE_POST_TYPE, STORE_POST_INPUTS, EDIT_POST_TYPE, DELETE_POST_TYPE } from ".";

export const storePostInputs = (input) => {
  return {
    type: STORE_POST_INPUTS,
    title: input.title,
    content: input.content,
  }
}

// export const createPost = (postInfos) => {
//   const { postData, datetime, username } = postInfos;
//   return {
//     type: CREATE_POST_TYPE,
//     post: {
//       ...postData,
//       datetime,
//       username,
//     },
//   }
// }

export const createPost = (postData) => {
  return {
    type: CREATE_POST_TYPE,
    newPost: {...postData},
  }
};

export const editPost = (postInfos) => {
  const { postData, datetime, username } = postInfos;
  return {
    type: EDIT_POST_TYPE,
    post: {
      ...postData,
      datetime,
      username,
    },
  }
}

export const deletePost = (postDelete) => {
  return {
    type: DELETE_POST_TYPE,
    postDelete,
  }
}
