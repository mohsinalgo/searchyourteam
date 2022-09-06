import {
    ADD_POST_FAILURE,
    ADD_POST_REQ,
    ADD_POST_SUCCESS,
    GET_POST_FAILURE,
    GET_POST_REQ,
    GET_POST_SUCCESS,
  } from "../actions/types";
  const INIT_STATE = {
    post: [],
    data:[],
    error: false,
    isLoading: false
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case ADD_POST_REQ:
        return {
          ...state,
          post: action.data,
          error: false,
          isLoading:true
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          post: action.data,
          error: false,
          isLoading:false
        };
      case ADD_POST_FAILURE:
        return {
          ...state,
          post: action.data,
          error: true,
          isLoading:false
        }
        case GET_POST_REQ:
        return {
          ...state,
          data: action.data,
          error: false,
          isLoading:true
        };
      case GET_POST_SUCCESS:
        return {
          ...state,
          data: action.data,
          error: false,
          isLoading:false
        };
      case GET_POST_FAILURE:
        return {
          ...state,
          data: action.data,
          error: true,
          isLoading:false
        }
      default:
        return state;
    }
  };
  