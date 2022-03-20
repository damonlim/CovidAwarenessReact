const express = require("express");
const router = express.Router();

// Load Controllers
const { validForm } = require("../helpers/valid");

const {
  getAllPatientsV1,
  registerPatientV1,
} = require("../controllers/dataController");

router.get("/v1/patients", getAllPatientsV1);

router.post("/v1/patients/register", validForm, registerPatientV1);

module.exports = router;
