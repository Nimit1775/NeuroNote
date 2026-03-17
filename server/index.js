import express from 'express';
import cors from 'cors';
import uploadRouter from './Routers/uploadRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/upload' , uploadRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});