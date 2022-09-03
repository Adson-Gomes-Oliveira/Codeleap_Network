import { CREATE_POST_TYPE, STORE_POST_INPUTS } from ".";

export const storePostInputs = (input) => {
  console.log(input);
  return {
    type: STORE_POST_INPUTS,
    title: input.title,
    content: input.content,
  }
}

export const createPost = (postInfos) => {
  const { postData, datetime, username } = postInfos;
  return {
    type: CREATE_POST_TYPE,
    post: {
      ...postData,
      datetime,
      username,
    },
  }
}
