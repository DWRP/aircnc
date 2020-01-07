const express = require('express');
const mongoose = require( 'mongoose');
const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();
const app = express();

DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;
DB_NAME = process.env.DB_USER;
DB_PATH = process.env.DB_PATH;
DB_RULES = process.env.DB_RULES;

DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}${DB_PATH}${DB_NAME}?${DB_RULES}`;

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(process.env.PORT || 8080);