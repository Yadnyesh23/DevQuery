import express from 'express';
import { requestLogger } from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(requestLogger);
app.use(errorHandler);

// Routes
import healthCheckRoute from './routes/healthCheck.route.js'

app.use('/api/v1', healthCheckRoute)

export default app;