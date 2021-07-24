// Note: Main reducer file...!

import { combineReducers } from "redux";
import todoArr from "./cases";

export default combineReducers({
    todoState: todoArr
});