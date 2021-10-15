import { combineReducers } from "redux";
import { authReducer } from "./RolesAuth/authReducer";

const rootReducer = combineReducers({
    user: authReducer,
})

export default rootReducer;