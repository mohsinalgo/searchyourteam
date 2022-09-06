import {
  AUTHENTICATION,
  SET_MERCHANT,
  SET_USER,
  LOGOUT_USER,
  CHECK_ONBORADING,
  SET_TOKEN,
  SET_ADDRESSES,
  GET_ADDRESSES,
  VERIFY_OTP,
  GET_USER_ADDRESS,
  SELECT_USER_ADDRESS,
  REGISTER_USER_REQ,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQ,
  LOGIN_USER_FAILURE,
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
} from "../actions/types";
const INIT_STATE = {
  user: [],
  error: false,
  isLoading:false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_REQ:
      return {
        ...state,
        user: action.data,
        error: false,
        isLoading:true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        error: false,
        isLoading:false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: action.data,
        error: true,
        isLoading:false
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        error: false,
        isLoading:false
      };
    case LOGIN_USER_REQ:
      return {
        ...state,
        user: action.data,
        error: false,
        isLoading:true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: action.data,
        error: true,
        isLoading:false
      };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          user: action.data,
          error: false,
          isLoading:false
        };
      case FORGOT_PASSWORD_REQ:
        return {
          ...state,
          user: action.data,
          error: false,
          isLoading:true
        };
      case FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          user: action.data,
          error: true,
          isLoading:false
        };
        case VERIFY_CODE_REQ:
          return {
            ...state,
            user: action.data,
            error: false,
            isLoading:true
          };
        case VERIFY_CODE_SUCCESS:
          return {
            ...state,
            user: action.data,
            error: false,
            isLoading:false
          };
        case VERIFY_CODE_FAILURE:
          return {
            ...state,
            user: action.data,
            error: true,
            isLoading:false
          }
          case RESET_PASSWORD_REQ:
            return {
              ...state,
              user: action.data,
              error: false,
              isLoading:true
            };
          case RESET_PASSWORD_SUCCESS:
            return {
              ...state,
              user: action.data,
              error: false,
              isLoading:false
            };
          case RESET_PASSWORD_FAILURE:
            return {
              ...state,
              user: action.data,
              error: true,
              isLoading:false
            }
    case LOGOUT_USER:
      return {
        ...state,
        INIT_STATE,
      };
    case CHECK_ONBORADING:
      return {
        ...state,
        skipOnBoarding: 1,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.data,
      };
    case GET_USER_ADDRESS:
      return {
        ...state,
        userAddress: action.data,
        loading: false
      };
    case SELECT_USER_ADDRESS:
      return {
        ...state,
        selectedUserAddress: action.data,
      };
    case VERIFY_OTP:
      console.log("***** -->>>", action.data);
      return {
        ...state,
        myCode: action.data,
      }
    default:
      return state;
  }
};
