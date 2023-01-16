const express = require('express');
const port = process.env.PORT || 8080;
require("./db/conn")
const MensRanking = require("./models/men");

const app = express();
app.use(express.json());

app.post('/mens', async (req, res) => {
    try {
        const player = new MensRanking(req.body);
        const insertMens = await player.save();
        res.status(201).send(insertMens);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () =>{
    console.log(`listening on port - ${port}`)
}); 