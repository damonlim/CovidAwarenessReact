import * as patientAction from "../actions/patientActions";

export default function patientReducer(state = { patients: [] }, action: any) {
  switch (action.type) {
    case patientAction.REGISTER_PATIENT_REQUEST:
      return state;
    case patientAction.CREATE_PATIENT_SUCCESS:
      return { patients: [...state.patients, { ...action.patient }] };
    //return [...state.patients, { ...action.patient }];
    case patientAction.ALL_PATIENTS_REQUEST:
      return state;
    case patientAction.SET_PATIENTS_STATE:
      return { ...state, patients: action.patients };
    default:
      return state;
  }
}
