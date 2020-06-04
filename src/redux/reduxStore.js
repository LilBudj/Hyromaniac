import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {palmReducer} from "./chiroReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(palmReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store