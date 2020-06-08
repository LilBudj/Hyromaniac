import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {palmReducer} from "./palmReducer";
import {horoscopeReducer} from "./horoscopeReducer";

let reducers = combineReducers({palmReducer, horoscopeReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store