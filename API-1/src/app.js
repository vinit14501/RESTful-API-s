const express = require('express');
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");
const validator = require('validator');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(studentRouter);


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server Is Running At ${port}`);
    }
});