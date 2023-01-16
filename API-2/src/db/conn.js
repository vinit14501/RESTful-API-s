const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@quarks.7nadfpk.mongodb.net/Olympics", {}).then(()=>{
    console.log('connection established');
}).catch((e) =>{
    console.log(e);
});