import express from 'express';
import allRoute from './routes/index';

const app = express();
const port = 1245;

app.listen(port);
app.use('/', allRoute);
app.use('/students', allRoute);
app.use('/students/:major', allRoute);

export default app;
