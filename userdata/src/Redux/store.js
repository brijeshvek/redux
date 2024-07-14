import { createStore } from "redux";
import UserReducer from "./UserReducer";

const store =createStore(UserReducer);

export default store;