import express, { urlencoded } from 'express';
import routes from './routes/crudeRoutes';
import cors from 'cors';

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(8080, () => {
    console.log('API online on port 8080');
});