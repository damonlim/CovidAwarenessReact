import { connect } from 'react-redux';
import * as patientAction from '../../redux/actions/patientActions';
import DeclarationFormContent from './DeclarationFormContent';


interface Props {
  registerUser: (name: string, temperature: number, symptomsCheck: string, beenInContact: string) => void;  
}

const DeclarationForm = ({registerUser}: Props) => {

  return (
    <>
      <DeclarationFormContent registerUser={registerUser}/>
    </>
  );
}

const mapDispatchToProps = (dispatch:any)=>({
  registerUser(name: string, temperature: number, symptomsCheck: string, beenInContact: string) {
    dispatch(patientAction.registerUserRequest(name, temperature, symptomsCheck, beenInContact));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(DeclarationForm);