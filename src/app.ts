import express from 'express';
import userRoutes from './api/routes/user.js';

const httpPort = 4000;

const initHttpServer = () => {
  const httpServer = express();
  httpServer.use(express.json());
  httpServer.use('/user', userRoutes);
  httpServer.listen(httpPort, () => console.log('External API Server listening to port:', httpPort));
};

initHttpServer();
