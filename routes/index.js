var express = require('express');
var router = express.Router();
var fs = require('fs');

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something');
  });
  ws.send('something');
});

let count = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(count)
  res.render('index', { title: 'Express', count});
});

router.get('/increment', function(req, res, next) {
  count++;
  res.render('index', { title: 'Express', count});
});


module.exports = router;
