import { combineReducers } from "redux";
import { AuthReducer } from "./index";
import { CommonReducer } from "../components/common/commonReducer";

import {USER_LOGOUT} from '../components/authentication/authActionTypes'

const appReducer = combineReducers({
  Auth: AuthReducer,
  Common:CommonReducer

});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};


export default rootReducer;
