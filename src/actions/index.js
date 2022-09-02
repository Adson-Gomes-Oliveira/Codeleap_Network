export const CREATE_USER_TYPE = 'CREATE_USER';

export const createUser = (username) => {
  return {
    type: CREATE_USER_TYPE,
    user: username,
  }
};