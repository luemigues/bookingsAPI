module.exports = class Patient {

    constructor( id, name, personalNumber, dateOfBirth, email, gender = "Unknown"){
        this.id = id;
        this.firstName = name.firstName;
        this.lastName =name.lastName;
        this.personalNumber = personalNumber;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.gender= gender;
    }
}