const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
  var coursOps = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
  if(reqUrl.query.op == ' ' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.addition(req, res,reqUrl.query.x,reqUrl.query.y);
  } 
  else if(reqUrl.query.op == '-' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.substraction(req, res,reqUrl.query.x,reqUrl.query.y);
  } 
  else if(reqUrl.query.op == '*' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.multiply(req, res,reqUrl.query.x,reqUrl.query.y);
  }
  else if(reqUrl.query.op == '/' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.division(req, res,reqUrl.query.x,reqUrl.query.y);
  }
  else if(reqUrl.query.op == '%' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.modulo(req, res,reqUrl.query.x,reqUrl.query.y);
  }
  else if(reqUrl.query.op == 'p' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.prime(req, res,reqUrl.query.n);
  }
  else if(reqUrl.query.op == '!' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.factorial(req, res,reqUrl.query.n);
  }
  else if(reqUrl.query.op == 'np' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.nthPrime(req, res,reqUrl.query.n);
  }
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.invalidUrl(req, res);
  }
})