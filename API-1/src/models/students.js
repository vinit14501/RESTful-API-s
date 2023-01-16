const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
      /*  validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("No Special Characters Allowed");
            }
        } */
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: [true, "Email ID already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Your Phone Number"],
        unique: [true, "Please Enter Valid Phone Number"],
        minlength: 10,
        maxlength: 10,
       /* validate(value){
            if(!validator.isNumeric(value)){
                throw new Error("Invalid Phone Number");
            }
        } */
    },
    address: {
        type: String,
        required: [true, "Please Enter Your Address"],
    },
    age: {
        type: Number,
        required: [true, "Please Enter Your Age"],
      /*  validate(value){
            if(!validator.isNumeric(value)){
                throw new Error("Please Enter Number Only");
            }
        } */
    }
})


// We will create new collection

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;