import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; 
import NetInfo from "@react-native-community/netinfo";
 import combineReducers from "../reducer/combineReducers"; 
import { CONNECTION_STATUS } from "../components/common/commonType";
import { DispatchService } from "../services/dispatchService";
const { setDispatch } = DispatchService;

function isNetworkConnected(store) {
    return new Promise(resolve => {
        const handleConnectivityChange = isConnected => {
            store.dispatch({ type: CONNECTION_STATUS, isConnected });
            resolve(isConnected);
        };
        NetInfo.addEventListener(state => {
            handleConnectivityChange(state.isConnected)
            console.log("Is connected?", state.isConnected);
        });
    });
}

export default () => {
    const store = createStore(
        combineReducers,
        {},
        applyMiddleware(ReduxThunk, reduxImmutableStateInvariant())
    );
    setDispatch(store.dispatch);
    isNetworkConnected(store);
    return store;
};
