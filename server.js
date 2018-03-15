// Define the ports
import config from './config';

// api routes defined in here
import apiRouter from './api';

// bring in express
import express from 'express';

// define server object
const server = express();


// ==== ROUTES ====
// Configure routes
server.get('/', (req,res)=>{
  res.send('Hello World');
});
// ==== ROUTES ====



// ==== MIDDLEWARE ====
/*
!! .use is how we can use express middleware stack.
  static is a middleware that we can use to serve static files.
  apiRouter is a middleware that we created ourselves
*/
// forward api calls to however apiRouter dictates
server.use('/api', apiRouter);

// serve static html files as well
server.use(express.static('pub'));
// ==== MIDDLEWARE ====



// run server
server.listen(config.port, () =>{
  console.log('Express listening on port: ', config.port);
});
