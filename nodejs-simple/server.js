const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Notes = require('./app/notes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const notes = new Notes();

app.get('/', async (req, res) => {
    try {
        const items = await notes.get();
        res.json(items);
    } catch (error) {
        res.statusCode = 500;
        res.json({error: error.toString()});
    }

});
app.post('/', async (req, res) => {
    try {
        const result = await notes.set(req.body);
        res.json(result);
    } catch (error) {
        res.statusCode = 500;
        res.json({error: error.toString()});
    }

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));