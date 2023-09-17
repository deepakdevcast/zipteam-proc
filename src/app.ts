import express from 'express';

const httpPort = 4000;

const initHttpServer = () => {
  const httpServer = express();
  httpServer.listen(httpPort, () => console.log('External API Server listening to port:', httpPort));
};

initHttpServer();
