import express from 'express';
import cardRoutes from './routes/card.routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/api', cardRoutes);

app.use(errorHandler);

export default app;
