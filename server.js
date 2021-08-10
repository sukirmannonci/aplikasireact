
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Panggil route
var route = require('./route');
route(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});