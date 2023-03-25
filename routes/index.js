var express = require('express');
var router = express.Router();
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3005 });

let count = 0;
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    if (message === 'kyosyu') {
      count++;
      ws.send(count);
    }
    else if (message === 'reset') {
      count = 0
      ws.send(count);
    }
    else {
      console.log('received undefined message.')
    }
  });
  ws.send(count);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
