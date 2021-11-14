import { combineReducers } from "redux";

import authReducer from "./authReducers";
import scheduleReducer from "./scheduleReducer";
import teamDetailsReducer from "./teamDetailsReducer";

export default combineReducers({
  auth: authReducer,
  team: teamDetailsReducer,
  schedule: scheduleReducer,
});
