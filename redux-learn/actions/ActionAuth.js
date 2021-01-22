import * as actionType from '../type';
export const signUpRequest = (name, email, password, navigation) => ({
  type: actionType.SIGNUP_REQUEST,
  name,
  email,
  password,
  navigation
})
export const signInRequest = (email, password, navigation) => ({
  type: actionType.LOGIN_REQUEST,
  payload: {
    email,
    password,
    navigation
  }
})
