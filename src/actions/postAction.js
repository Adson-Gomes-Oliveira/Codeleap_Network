import axios from "axios";

import { GET_POST_TYPE, CREATE_POST_TYPE, STORE_POST_INPUTS, EDIT_POST_TYPE, DELETE_POST_TYPE } from ".";

export const storePostInputs = (input) => {
  return {
    type: STORE_POST_INPUTS,
    title: input.title,
    content: input.content,
  }
}

export const REQUEST_POST_GET_TYPE = 'REQUEST_GET_POST'
export const RESPONSE_POST_GET_TYPE = 'RESPONSE_GET_POST'
export const REQUEST_POST_CREATE_TYPE = 'REQUEST_CREATE_POST'
export const RESPONSE_POST_CREATE_TYPE = 'RESPONSE_CREATE_POST'

const requestGetPost = () => ({
  type: REQUEST_POST_GET_TYPE,
});

const responseGetPost = (postData) => ({
  type: RESPONSE_POST_GET_TYPE,
  postData,
});

export function getPost() {
  return async (dispatch) => {
    dispatch(requestGetPost());
    try {
      const request = await axios.get('https://dev.codeleap.co.uk/careers/');
      return dispatch(responseGetPost(request.data));
    } catch (error) {
      console.log(error);
    }
  }
}

const requestCreatePost = () => ({
  type: REQUEST_POST_CREATE_TYPE,
});

const responseCreatePost = (postData) => ({
  type: RESPONSE_POST_CREATE_TYPE,
  postData,
});

export function createPost(postData) {
  return async (dispatch) => {
    dispatch(requestCreatePost());
    try {
      const request = await axios.post('https://dev.codeleap.co.uk/careers/', postData);
      return dispatch(responseCreatePost(request.data));
    } catch (error) {
      console.log(error);
    }
  }
}

// export const getPost = createAsyncThunk(
//   'GET_POST',
//   async() => {
//     try {
//       const request = await axios.get('https://dev.codeleap.co.uk/careers/');
//       return request.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

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

// export const createPost = (postData) => {
//   return {
//     type: CREATE_POST_TYPE,
//     newPost: {...postData},
//   }
// };

// export function createPosts(postData) {
//   return (dispatch) => {
//     dispatch(createPost(postData));
//     return fetch('https://dev.codeleap.co.uk/careers/', {
//       method: 'POST',
//       body: JSON.stringify({
//         username: postData.user,
//         title: postData.title,
//         content: postData.content,
//       })
//     }).then((response) => response.json())
//     .then((dataPosted) => dispatch())
//   }
// }

// export const createPost = createAsyncThunk(
//   'CREATE_POST',
//   async(data) => {
//     try {
//       const request = await axios.post('https://dev.codeleap.co.uk/careers/', data);
//       return request.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const editPost = createAsyncThunk(
//   'EDIT_POST',
//   async(data) => {
//     try {
//       const { post, postID } = data;
//       const request = await axios.patch(`https://dev.codeleap.co.uk/careers/${postID}`, post);
//       return request.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// )

// export const deletePost = createAsyncThunk(
//   'DELETE_POST',
//   async(postID) => {
//     try {
//       await axios.delete(`https://dev.codeleap.co.uk/careers/${postID}`);
//       return postID;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// )

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
