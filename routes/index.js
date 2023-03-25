var express = require('express');
var router = express.Router();
var fs = require('fs');

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3005 });

let count = 0;
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    count++;
    ws.send(count);
  });
  ws.send(count);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(count)
  res.render('index', { title: 'Express', count });
});

router.get('/increment', function (req, res, next) {
  count++;
  res.render('index', { title: 'Express', count });
});


module.exports = router;
