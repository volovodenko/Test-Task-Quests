import api from './api/index';
import web from './web/index';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';


const upload = multer({ dest: path.resolve(__dirname, '../uploads') }).single('fileName');

export const routes =  (app) => {

    // serve static assets normally
    app.use(express.static(path.resolve(__dirname, '../../public')));

    app.use(bodyParser.urlencoded({ extended: true }));

    api(app, upload); //api routes
    web(app); //web routes

};

