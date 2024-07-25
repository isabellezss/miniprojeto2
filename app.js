import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './src/routes/app.router.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
