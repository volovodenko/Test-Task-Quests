import express from 'express';
import {routes} from './routes';
import {APP_PORT} from './config';


const app = express();

routes(app);

app.listen(APP_PORT, () => console.log(`server started on port ${APP_PORT}`));
