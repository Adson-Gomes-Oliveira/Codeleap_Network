import axios from "axios";

// I did not use redux toolkit here because my first code didn't have the API implemented,
// so to use better the time and to get a fastest way to correct my code I wrote the async code
// in the old way, but i'm aware of the benefits of redux toolkit.

export const STORE_POST_INPUTS = 'STORE_POST';
export const REQUEST_POST_GET_TYPE = 'REQUEST_GET_POST';
export const RESPONSE_POST_GET_TYPE = 'RESPONSE_GET_POST';
export const REQUEST_POST_CREATE_TYPE = 'REQUEST_CREATE_POST';
export const RESPONSE_POST_CREATE_TYPE = 'RESPONSE_CREATE_POST';
export const REQUEST_POST_EDIT_TYPE = 'REQUEST_EDIT_POST';
export const RESPONSE_POST_EDIT_TYPE = 'RESPONSE_EDIT_POST';
export const REQUEST_POST_DELETE_TYPE = 'REQUEST_DELETE_POST';
export const RESPONSE_POST_DELETE_TYPE = 'RESPONSE_DELETE_POST';

export const storePostInputs = (input) => { // Store username
  return {
    type: STORE_POST_INPUTS,
    title: input.title,
    content: input.content,
  }
}

const requestGetPost = () => ({
  type: REQUEST_POST_GET_TYPE,
});

const responseGetPost = (postData) => ({
  type: RESPONSE_POST_GET_TYPE,
  postData,
});

export function getPost() { // Get posts from database
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

export function createPost(postData) { // Create posts on database
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

const requestEditPost = () => ({
  type: REQUEST_POST_EDIT_TYPE,
});

const responseEditPost = (postData) => ({
  type: RESPONSE_POST_EDIT_TYPE,
  postData,
});

export function editPost(postData) { // Edit posts
  const { id, title, content } = postData;
  return async (dispatch) => {
    dispatch(requestEditPost());
    try {
      const request = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, { title, content });
      return dispatch(responseEditPost(request.data));
    } catch (error) {
      console.log(error);
    }
  }
}

const requestDeletePost = () => ({
  type: REQUEST_POST_DELETE_TYPE,
});

const responseDeletePost = (postID) => ({ // Delete posts from database
  type: RESPONSE_POST_DELETE_TYPE,
  postID,
});

export function deletePost(postID) {
  return async (dispatch) => {
    dispatch(requestDeletePost());
    try {
      await axios.delete(`https://dev.codeleap.co.uk/careers/${postID}/`);
      return dispatch(responseDeletePost(postID));
    } catch (error) {
      console.log(error);
    }
  }
}
