import * as dotenv from 'dotenv' 
dotenv.config()

import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';

const app = express();

app.use(cors());

app.use(express.json()); //Middleware

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/files/'
}))

// Router
app.use('/api', router);;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App ready in http://localhost:${port}`)
});