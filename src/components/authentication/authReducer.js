import {

  AUTH_USER_LOGGED_IN,
} from "./authActionTypes";

const initialState = {
  token: { accessToken: "", refresh: "", expiry: "" }
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_LOGGED_IN:
      const {
        token
      } = action.payload;
      return {
        ...state,
        token: { token }
      };
    default:
      return state;
  }
};

export { AuthReducer };
