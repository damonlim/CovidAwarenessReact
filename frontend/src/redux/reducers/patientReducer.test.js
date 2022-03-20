import patientReducer from "./patientReducer";
import * as actions from "../actions/patientActions";

it("should add patient when passed REGISTER_PATIENT_REQUEST", () => {
  // arrange
  const initialState = {
    patients: [
      {
        name: "A",
        temperature: 36,
        symptomsCheck: "No",
        beenInContact: "No",
      },
    ],
  };
  const newPatient = {
    name: "B",
    temperature: 39,
    symptomsCheck: "Yes",
    beenInContact: "No",
  };

  const action = actions.createPatientSuccess(newPatient);

  // act
  const newState = patientReducer(initialState, action);

  // assert
  expect(newState.patients.length).toEqual(2);
  expect(newState.patients[0].name).toEqual("A");
  expect(newState.patients[1].name).toEqual("B");
});
