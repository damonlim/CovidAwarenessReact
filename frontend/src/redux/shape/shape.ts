
export interface PatientShape {
  name: string;
  temperature: number;
  symptomsCheck: string;
  beenInContact: string;
}

interface PatientState {
  patients: PatientShape[]
}

export interface StateShape {
  patient: PatientState;
}