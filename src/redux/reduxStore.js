import {applyMiddleware, createStore} from "redux";
import {chiroReducer} from "./chiroReducer";

const store = createStore(chiroReducer);

export default store