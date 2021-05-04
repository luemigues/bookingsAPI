const patientRespository = require('../repositories/patientRepository.js')

module.exports = class PatientController {

    static getAllPatients(req, res){
        try{
            const patients = patientRespository.getAllPatients()

            if(patients.length > 0){
                res.status(200).json(patients)
            }else{
                res.status(404).send('No patients found')
            }

        }catch(error){
            console.log(error)
        }
    }

    static getPatientById(req, res){

        try{
            const id = parseInt(req.params.id);
            const patient = patientRespository.getPatientById(id);

            if(patient){
                res.status(200).json(patient)
            }else{
                res.status(404).send('No patient found with the requested ID')
            }

        }catch(error){
            console.log(error)
        }
    }

    static updatePatientById(req, res){

        try{
            const id = parseInt(req.params.id);
            const patientUpdates = req.body;

            const patient = patientRespository.updatePatientById(id, patientUpdates);

            if(patient){
                res.status(200).json(patient)
            }else{
                res.status(400).send('Patient could not be updated')
            }

            }catch(error){
            console.log(error)
        }
    }

    static createNewPatient(req, res){

        try{

            if(req.body.firstName && req.body.lastName && req.body.personalNumber && req.body.email && req.body.dateOfBirth){
                
                const newPatient = {
                    name: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
                    },
                    personalNumber: req.body.personalNumber,
                    dateOfBirth: new Date(req.body.dateOfBirth),
                    email: req.body.email,
                    gender: req.body.gender
                }
            
                const patient = patientRespository.createNewPatient(newPatient);
    
                if(patient){
                    res.status(201).json(patient)
                }else{
                    res.status(400).send('Patient could not be created')
                }
            }else{
                res.status(400).send('Patient information is missing')
            }

        }catch(error){
            console.log(error)
        }
    }
}