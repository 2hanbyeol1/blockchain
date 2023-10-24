var express = require("express");
var app = express();

// 전체 블록체인의 데이터를 본다
app.get("/blockchain", function (req, res) {
  //   res.send("Hello Coding JavaScript");
});

// 새로운 트랜잭션을 만든다
app.post("/transaction", function (req, res) {});

// 새 블록을 채굴한다
app.get("/mine", function (req, res) {});

app.listen(3000, function () {
  console.log("Listening on port 3000..."); // 포트가 잘 동작해야 실행됨
});
