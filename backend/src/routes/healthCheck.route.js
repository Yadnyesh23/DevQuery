import express from 'express';
import healthCheckHandler from '../handlers/healthCheck.handler.js';

const router = express.Router()

router.get('/healthcheck',healthCheckHandler);

export default router;