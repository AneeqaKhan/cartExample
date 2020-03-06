import {REQUEST_BEGIN, REQUEST_DONE, CONNECTION_STATUS} from './commonType';

const initialState = {
  requestCount: 0,
  isConnected: true,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BEGIN:
      return {...state, requestCount: state.requestCount + 1};
    case REQUEST_DONE:
      return {...state, requestCount: state.requestCount - 1};
    case CONNECTION_STATUS:
      return Object.assign({}, state, {isConnected: action.isConnected});
    default:
      return state;
  }
};

export {CommonReducer};
