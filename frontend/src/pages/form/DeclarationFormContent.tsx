import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

interface Props {
  registerUser: (
    name: string,
    temperature: number,
    symptomsCheck: string,
    beenInContact: string
  ) => void;
}

interface IDeclarationForm {
  name: string;
  temperature: string;
  symptomsCheck: string;
  beenInContact: string;
}

const symptomsCheckLabel =
  "Do you have any of the following symptoms now or within the last 14 days: Cough, smell/taste impairment, fever, breathing difficulties, body aches, headaches, fatigue, sore throat, diarrhoea, and / or runny nose (even if your symptoms are mild)?";
const beenInContactLabel =
  "Have you been in contact with anyone who is suspected to have or/has been diagnosed with Covid-19 within the last 14 days?";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  temperature: yup
    .string()
    .matches(/^[0-9.]*$/, "Please key in the numeric value in Celcius")
    .required("Temperature is required"),
  symptomsCheck: yup.string().required("Please check the option"),
  beenInContact: yup.string().required("Please check the option"),
});

const DeclarationFormContent = ({ registerUser }: Props) => {
  const handleSubmit = (values: IDeclarationForm) => {
    const newValues = {
      ...values,
      temperature: parseFloat(values.temperature),
    };
    const { name, temperature, symptomsCheck, beenInContact } = newValues;

    try {
      registerUser(name, temperature, symptomsCheck, beenInContact);
    } catch (error) {
      toast.error("There is a failure in registering user with message: ");
      if (error instanceof Error) {
        toast.error(error.message);
        console.error(error.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      temperature: "",
      symptomsCheck: "",
      beenInContact: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: IDeclarationForm) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid item xs={1} md={2} />
      <Grid item xs={8} md={6}>
        <Typography variant="h5">Declaration Form</Typography>
        <Typography sx={{ mt: 2 }}>Name</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            data-testid="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <Typography sx={{ mt: 2 }}>Temperature (in Celcius)</Typography>
          <TextField
            fullWidth
            id="temperature"
            data-testid="temperature"
            name="temperature"
            value={formik.values.temperature}
            onChange={formik.handleChange}
            error={
              formik.touched.temperature && Boolean(formik.errors.temperature)
            }
            helperText={formik.touched.temperature && formik.errors.temperature}
          />

          <Typography sx={{ mt: 2 }}> {symptomsCheckLabel} </Typography>
          <FormControl>
            <RadioGroup
              row
              name="symptomsCheck"
              value={formik.values.symptomsCheck}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Typography color="error">
            {" "}
            {formik.touched.symptomsCheck && formik.errors.symptomsCheck}{" "}
          </Typography>

          <Typography sx={{ mt: 2 }}> {beenInContactLabel} </Typography>
          <FormControl>
            <RadioGroup
              row
              name="beenInContact"
              value={formik.values.beenInContact}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Typography color="error">
            {" "}
            {formik.touched.beenInContact && formik.errors.beenInContact}{" "}
          </Typography>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            type="submit"
            data-testid="submitBtn"
          >
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={1} md={2} />
    </Grid>
  );
};
export default DeclarationFormContent;
