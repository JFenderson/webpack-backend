import { join } from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import stateRouting from './middleware/routing.mw';



const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(CLIENT_PATH));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const apiRouter = require('./routes');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const path = require('path');
// const mustache = require('mustache');

// let app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../client')));