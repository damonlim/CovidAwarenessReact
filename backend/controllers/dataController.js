const dataService = require("../lib/dataService").instance;

exports.getAllPatientsV1 = async (req, res) => {
  console.debug("getAllPatientsV1");

  let data = await dataService.findPatients();
  if (data === undefined || data.length == 0) {
    data = [{}];
  }

  return res.json(data);
};

exports.registerPatientV1 = async (req, res) => {
  console.debug("registerPatientV1 body:", req.body);

  let patientObj = {};
  const name = req.body.name;
  const temperature = req.body.temperature;
  const symptomsCheck = req.body.symptomsCheck;
  const beenInContact = req.body.beenInContact;

  if (name && temperature && symptomsCheck && beenInContact) {
    patientObj.name = name;
    patientObj.temperature = temperature;
    patientObj.symptomsCheck = symptomsCheck;
    patientObj.beenInContact = beenInContact;
  } else {
    res.status(400);
    return res.send("All fields are required");
  }

  const patient = await dataService.addPatient(patientObj);
  if (patient) {
    return res.json(patient);
  }
};
