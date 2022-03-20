const { check } = require("express-validator");
exports.validForm = [
  check("name", "Name is required").notEmpty(),
  check("temperature", "Temperature is required").notEmpty(),
  check("symptomsCheck", "Symptoms Check is required").notEmpty(),
  check("beenInContact", "Contact Check is required").notEmpty(),
];
