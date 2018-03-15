// Define the ports
import config from './config';

// api routes defined in here
import apiRouter from './api';

// bring in express
import express from 'express';

// define server object
const server = express();

// ==== TEMPLATE ====
/* Configure template as ejs > Embedded Javascript
  by default express will go to views folder for these temlpates.
  to return them we use res.render
*/

server.set('view engine', 'ejs');
// ==== TEMPLATE ====

// ==== ROUTES ====
// Configure routes
server.get('/', (req,res)=>{
  //res.send('Hello World');
  res.render('index', {
    content:'Passing argument from server.js | Server.get method to View template'
  });
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
