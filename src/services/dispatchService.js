let _dispatch;

function setDispatch(dispatch) {
  _dispatch = dispatch;
}

export const DispatchService = {
  getDispatch: ()=> _dispatch,
  setDispatch
};
