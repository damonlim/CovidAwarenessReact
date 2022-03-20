import { useEffect } from "react";
import { 
  Grid, 
  Paper, 
  Typography 
} from '@mui/material';
import PatientTable from "./PatientTable";
import { connect } from 'react-redux';
import * as patientAction from '../../redux/actions/patientActions';
import { PatientShape, StateShape } from '../../redux/shape/shape';

interface Props {
  patients: PatientShape[];
  getAllPatients: () => void; 
}

function Report({patients, getAllPatients}: Props) {

  useEffect(() => {
    getAllPatients();
  }, []); // eslint-disable-line

  return (
    <>
      <Grid container spacing={1} sx={{mt:1}}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Typography variant="h5">
              Patients' Data
            </Typography>  
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            {patients && (<PatientTable rows={patients}/>)}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state:StateShape)=>{
  const patients = state.patient.patients;

  return {
    patients
  }  
};

const mapDispatchToProps = (dispatch:any)=>({
  getAllPatients() {
    dispatch(patientAction.allPatientsRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);