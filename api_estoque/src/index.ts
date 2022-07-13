import express, { urlencoded } from 'express';
import { appendFile } from 'fs';
import routes from './routes/crudeRoutes';

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

app.listen(8080, () => {
    console.log('API online on port 8080');
});