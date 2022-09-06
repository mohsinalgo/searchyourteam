import axios from "axios";
import { Linking, Platform } from "react-native"
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import {
    ADD_POST_FAILURE,
    ADD_POST_REQ,
    ADD_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_POST_REQ,
    GET_POST_SUCCESS,
} from "./types";

import { BASE_URL } from "../../utils/Constants";
export const addPost = (title, description,picture,cb) => {
    // const email  = useSelector(state => state.auth.user)

    return dispatch => {
        dispatch({
            type: ADD_POST_REQ,
            data: {},
        });
      const form = new FormData()
      form.append("title",title)
      form.append("email","abdullahbilal.symits@gmail.com")
      form.append("img",{
        uri: picture,
        name: `photo.jpg`,
        type: 'image/jpg', 
      })
      form.append("description",description)
      console.log("DATA",JSON.stringify(form));
      return axios.post(
          BASE_URL+'api/post',form).then((res) => {
            cb()
            alert("Post Added")
            dispatch({
              type: ADD_POST_SUCCESS,
              data: {},
            });
          }).catch((er)=>{
            dispatch({
              type: ADD_POST_FAILURE,
              data: {},
            });
            alert('Something went wrong please again')
           console.log("post-->> ", er);
          })
    }
  }
  
  export const getPost = () => {
    return dispatch => {
      dispatch({
        type: GET_POST_REQ,
        data: {},
      });
      return axios.get(
          BASE_URL+'api/post').then((res) => {
            dispatch({
              type: GET_POST_SUCCESS,
              data: res.data.data,
            });
          }).catch((er)=>{
            dispatch({
              type: GET_POST_FAILURE,
              data: {},
            });
            alert('Something went wrong please again')
           console.log("post-->> ", er);
          })
    }
  }