import path from 'path';

const web = (app) => {
    app.all('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../../public/index.html'));
    });

};

export default web;
