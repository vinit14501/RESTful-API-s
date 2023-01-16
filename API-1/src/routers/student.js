const express = require('express');
const router = new express.Router();
const Student = require('../models/students');

// ************************************Listing Records*************************************************

// ---------------------------------------List all----------------------------------------------------

router.get('/students' , async (req , res)=>{
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

// ---------------------------------------------Finding by ID------------------------------------------------

// router.get('/students/:id', async (req, res)=>{
//     console.log("Here. id")
//     try {
//         const _id = req.params.id;
//         const studentDataId = await Student.findById(_id);
//         res.status(200).send(studentDataId);
//         if (!studentDataId) {
//             return res.status(400).send()
//         }
//         else {
//             res.send(studentDataId)
//         }
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// });

// ------------------------------------------------Finding by Name--------------------------------------------

router.get('/students/byField', async (req, res)=>{
    try {
        const queries = req.query;
        const studentDataName = await Student.find(
            queries
        );
        
        if (!studentDataName) {
            return res.status(400).send()
        }
        else {
            res.status(200).send(studentDataName);
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
});


// ************************************************Inserting Records*********************************************

// ----------------------------------------Create new student----------------------------------------------------

router.post('/students' , async (req , res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    }
    catch(error){
        res.status(400).send(error);
    }
});

// *******************************************Updating Records****************************************************

// ---------------------------------------Updating By ID-------------------------------------------------

router.patch('/students/:id', async (req, res) =>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body , {
            new: true
        });
        res.status(200).send(updateStudent);
    } catch (error) {
        res.status(400).send(error);
    }
});

// ---------------------------------------Updating By Name-------------------------------------------------

router.patch('/students/:name', async (req, res) =>{
    try {
        const name = req.params.name;
        const updateStudentName = await Student.findOneAndUpdate(name, req.body , {
            new: true
        });
        res.status(200).send(updateStudentName);
    } catch (error) {
        res.status(400).send(error);
    }
});

// ******************************************Deleting Records************************************************

// ------------------------------------------Deleting By Id--------------------------------------------------

router.delete('/students/:id', async (req, res) =>{
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id, req.body)
        res.status(200).send(deleteStudent);
    } catch (error) {
        res.status(400).send(error);
    }
})



module.exports = router;