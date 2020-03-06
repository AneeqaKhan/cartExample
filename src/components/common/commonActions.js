import {REQUEST_BEGIN, REQUEST_DONE} from './commonType';

export const beginRequest = () => ({
  type: REQUEST_BEGIN,
});

export const endRequest = () => ({
  type: REQUEST_DONE,
});

export const updateConnectionStatus = status => (dispatch, getState) => {
  dispatch({type: 'CONNECTION_STATUS', isConnected: status});
};
