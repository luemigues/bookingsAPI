const Patient = require('../models/patient.js');

//Hard coded values as there is no connection to a Database
//All patients list
const patientsDB = []


module.exports = class PatientController {

    static getAllPatients(){

        const patients = patientsDB;
        return patients;

    }

    static getPatientById(id){

        let selectedPatient;

        for(let patient of patientsDB){
            if(patient.id === id){
                selectedPatient = patient;
            }
        }

        return selectedPatient;
    }

    
    static updatePatientById(id, patientUpdates){
        
        let patientIndex = patientsDB.findIndex( patient => patient.id === id)
        let selectedPatient;

        if(patientIndex > -1){

            let updatedPatient = {
                ...patientsDB[patientIndex],
                ...patientUpdates
            };

            patientsDB[patientIndex] = updatedPatient;
            return updatedPatient;

        }else{
            return null
        }
        
        return selectedPatient;
    }
    
    static createNewPatient(newPatient){

       const id = patientsDB.length + 1

        let patient = new Patient (
            id,
            newPatient.name,
            newPatient.personalNumber,
            newPatient.dateOfBirth,
            newPatient.email,
            newPatient.gender
        )

        patientsDB.push(patient)

        return patient;
    
    }
}