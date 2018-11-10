const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

app.get('/', (req, res) => {
	res.send('Website Started');
});

app.listen('3000', () => {
	console.log('Server started on port 3000');
});

app.use(cors());
app.use(bodyParser.json());