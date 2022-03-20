import { call, put, take } from "redux-saga/effects";
import axios from "axios";
import { toast } from "react-toastify";
import * as patientAction from "../actions/patientActions";

async function getAllPatients() {
  return axios
    .get(`/api/v1/patients`)
    .then((response) => ({ result: response }))
    .catch((error) => ({ error }));
}

export function* getAllPatientsSaga() {
  while (true) {
    yield take(patientAction.ALL_PATIENTS_REQUEST);
    try {
      const { result, error } = yield call(getAllPatients);

      if (result && result.data.length > 0) {
        yield put(patientAction.setPatientsState(result.data));
      } else {
        if (error.response.data.errors) {
          toast.error(error.response.data.errors);
        } else {
          toast.error("No data on patients. Please contact your admin.");
          console.error("No data returned from get all patients: ", error);
        }
      }
    } catch (error) {
      toast.error(
        "Something's wrong. Please contact your admin on getAllPatientsSaga."
      );
      console.error("getAllPatientsSaga error: ", error);
    }
  }
}

async function registerPatient(
  name: string,
  temperature: number,
  symptomsCheck: boolean,
  beenInContact: boolean
) {
  return axios
    .post(`/api/v1/patients/register`, {
      name,
      temperature,
      symptomsCheck,
      beenInContact,
    })
    .then((response) => ({ result: response }))
    .catch((error) => ({ error }));
}

export function* registerPatientSaga() {
  while (true) {
    const { name, temperature, symptomsCheck, beenInContact } = yield take(
      patientAction.REGISTER_PATIENT_REQUEST
    );
    try {
      const { result, error } = yield call(
        registerPatient,
        name,
        temperature,
        symptomsCheck,
        beenInContact
      );

      if (result && result.data) {
        // update new patient state
        yield put(patientAction.createPatientSuccess(result.data));
        toast.success(`User ${result.data.name} is saved`);
      } else {
        toast.error("Data is not saved. Please contact your admin. ", error);
        console.error("Patient save error ", error);
      }
    } catch (error) {
      console.error("registerPatientSaga error: ", error);
    }
  }
}
