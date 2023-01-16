const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@quarks.7nadfpk.mongodb.net/studentsapi", {
    // strictQuery : false
}).then(() => {
    console.log('Connection established');
}).catch((e) => {
    console.log(e);
})