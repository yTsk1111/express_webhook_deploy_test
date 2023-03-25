console.log("送信ボタンを押して下さい");
var sock = new WebSocket('ws://localhost:3005');

sock.addEventListener('open', function (e) {// 接続
  console.log('Socket 接続成功');
});

sock.addEventListener('message', function (e) {// サーバーからデータを受け取る
  console.log(e.data);
  elm = document.getElementById("test_line");
  updated = '挙手数：' + e.data
  elm.textContent = updated;
});

document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementById('sample').addEventListener('click', function (e) {
    console.log("send Hello!!");
    sock.send('hello');// WebSocketでサーバーに文字列を送信
  });
});