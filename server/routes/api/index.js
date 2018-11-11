import fs from 'fs';
import path from 'path';


const MainPageInfo = path.resolve(__dirname, '../../../public/data/MainPageInfo.json');
const GeneralQuestsInfo = path.resolve(__dirname, '../../../public/data/GeneralQuestsInfo.json');
const FinishedQuestsLeafs = path.resolve(__dirname, '../../../public/data/FinishedQuestsLeafs.json');


const handleError = (err, res) => {
    const errorData = {
        success: false,
        message: 'Internal server error'
    };

    if (err) {
        res.send(errorData);
        throw err;
    }
};


const api = (app, upload) => {

    app.get('/api/getMainPageInfo', (req, res) => {
        fs.readFile(MainPageInfo, (err, data) => {
            handleError(err, res);

            const resData = {
                success: true,
                data: JSON.parse(data)
            };

            res.send(resData);
        });

    });

    app.get('/api/getGeneralQuestsInfo/:alias', (req, res) => {
        fs.readFile(GeneralQuestsInfo, (err, data) => {
            handleError(err, res);

            let resData;
            const aliasData = JSON.parse(data).filter(item => item.alias === req.params.alias);

            resData = aliasData.length
                ? {success: true, data: aliasData.pop()}
                : {success: false, message: 'Quest info not found'};

            res.send(resData);
        });

    });

    app.get('/api/getFinishedQuestsLeafs/:questId', (req, res) => {
        const questId = +req.params.questId;
        if (!questId) return res.send({success: false, message: 'QuestId should be a number'});

        fs.readFile(FinishedQuestsLeafs, (err, data) => {
            handleError(err, res);

            const finishedLeafsData = JSON.parse(data).filter(item => item.questId === questId);
            const resData = finishedLeafsData.length
                ? {success: true, data: finishedLeafsData}
                : {success: false, message: 'Leafs data not found'};

            res.send(resData);
        });
    });


    app.post('/api/sendFinishedQuestsLeafs', upload, (req, res) => {
        const src = req.file.path;
        const dest = path.resolve(__dirname, '../../../public/data/FinishedQuestsLeafs.json');

        fs.copyFile(src, dest, (err) => {
            handleError(err, res);

            console.log(`File ${req.file.path} was copied to ${dest}`);
        });

        res.send({success: true});

        fs.unlink(src, (err) => {
            handleError(err, res);

            console.log(`File ${req.file.path} was deleted`);
        });
    });



    app.all('/api/*', (req, res) => {
        res.send({message: 'API: Not Found'});
    });

};

export default api;
