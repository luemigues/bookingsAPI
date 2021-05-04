const express = require('express');
const patientRouter = express.Router();
const PatientController = require('../controllers/patientController');

//get all patients
patientRouter.get('/', PatientController.getAllPatients );

//get one patient
patientRouter.get('/:id', PatientController.getPatientById);

//update a patient
patientRouter.put('/:id', PatientController.updatePatientById);

//create a patient
patientRouter.post('/', PatientController.createNewPatient);

//delete a patient
patientRouter.delete('/:id', PatientController.deletePatientById);

module.exports = patientRouter;