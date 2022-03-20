import { PatientShape } from "../shape/shape";

export const REGISTER_PATIENT_REQUEST = "REGISTER_PATIENT_REQUEST";
export const CREATE_PATIENT_SUCCESS = "CREATE_PATIENT_SUCCESS";
export const ALL_PATIENTS_REQUEST = "ALL_PATIENTS_REQUEST";
export const SET_PATIENTS_STATE = "SET_PATIENTS_STATE";

export const registerUserRequest = (
  name: string,
  temperature: number,
  symptomsCheck: string,
  beenInContact: string
) => ({
  type: REGISTER_PATIENT_REQUEST,
  name,
  temperature,
  symptomsCheck,
  beenInContact,
});

export const createPatientSuccess = (patient: PatientShape) => ({
  type: CREATE_PATIENT_SUCCESS,
  patient,
});

export const allPatientsRequest = () => ({
  type: ALL_PATIENTS_REQUEST,
});

export const setPatientsState = (patients: PatientShape[]) => ({
  type: SET_PATIENTS_STATE,
  patients,
});
