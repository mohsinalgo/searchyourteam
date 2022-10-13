import axios from "axios";
import { Linking, Platform } from "react-native";
// import AsyncStorageLib from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-community/async-storage";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQ,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQ,
  LOGIN_USER_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQ,
  FORGOT_PASSWORD_SUCCESS,
  VERIFY_CODE_FAILURE,
  VERIFY_CODE_REQ,
  VERIFY_CODE_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQ,
  RESET_PASSWORD_SUCCESS,
} from "./types";

import { BASE_URL } from "../../utils/Constants";
// const qs = require("qs");

export const userRegister = (username, email, password, fullName, dob, accountType,cb) => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER_REQ,
      data: {},
    });
    return axios.post(
      BASE_URL+'api/auth/register',
        {
          "name": username,
          "email": email,
          "password": password,
          "fullName": fullName,
          "dob": dob,
          "accountType": accountType
        }).then((res) => {
          cb()
          alert("Register Successfull")
          dispatch({
            type: REGISTER_USER_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: REGISTER_USER_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("My errr register-->> ", er);
         

        })
  
  }
}

export const userLogin = (email, password) => (dispatch) => {

  
  let formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);

  return axios({
    method: 'POST',
    url: BASE_URL+'auth/login',
    data: formData,
  }).then((response) => {
    console.log('responseee', response.data);
    // console.log(JSON.stringify(response.data))

    return response

  }).catch((error) => {
    console.log('bhbhbhbhbhbhbhbhb', error);
  });
}

export const emailValidation = (email) => (dispatch) => {

  
  let formData = new FormData();

  formData.append('email', email);

  return axios({
    method: 'POST',
    url: BASE_URL+'auth/validateEmail',
    data: formData,
  }).then((response) => {
    console.log('responseee', response.data);
    // console.log(JSON.stringify(response.data))

    return response

  }).catch((error) => {
    if (error.response) {
      console.log('111',error.response.data.errors[0])
      return error.response.data.errors[0]
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
  } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the 
      // browser and an instance of
      // http.ClientRequest in node.js
      console.log('22',error.request);
  } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
  }
  console.log('confg',error.config);
  });
}


export const forgotPassword = (email,cb) => {
  return dispatch => {
    dispatch({
      type: FORGOT_PASSWORD_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/forgotPassword',
        {
          "email": email
        }).then((res) => {
          cb()
          alert(`Email sent successfully,\nif you don't get email in your inbox please check your Spam or Junk folder`)
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: FORGOT_PASSWORD_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("forgotPassword-->> ", er);
        })
  }
}
export const verifyCode = (email,code,cb) => {
  return dispatch => {
    dispatch({
      type: VERIFY_CODE_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/verifyCode',
        {
          "email": email,
          "code":code
        }).then((res) => {
          cb()
          // alert("Verify Code Successfull")
          dispatch({
            type: VERIFY_CODE_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: VERIFY_CODE_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("verifyCode-->> ", er);
        })
  }
}
export const resetPassword = (email,password,cb) => {
  return dispatch => {
    dispatch({
      type: RESET_PASSWORD_REQ,
      data: {},
    });
    return axios.post(
        BASE_URL+'api/auth/resetPassword',
        {
          "email": email,
          "password":password
        }).then((res) => {
          cb()
          // alert("Password Changed")
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            data: {},
          });
        }).catch((er)=>{
          dispatch({
            type: RESET_PASSWORD_FAILURE,
            data: {},
          });
          alert('Something went wrong please again')
         console.log("forgotPassword-->> ", er);
        })
  }
}