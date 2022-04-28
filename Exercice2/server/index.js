const express = require('express');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require('cors');

const app = express();

//importation des routes
const postRoutes = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/', postRoutes);

app.listen(3001, () => console.log('Server started ...'));