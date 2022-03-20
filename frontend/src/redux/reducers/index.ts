import { combineReducers } from "redux";
import patient from "./patientReducer";

const rootReducer = combineReducers({
  patient,
});

export default rootReducer;
