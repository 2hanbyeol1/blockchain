const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

// 전체 블록체인의 데이터를 본다
app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

// 새로운 트랜잭션을 만든다
app.post("/transaction", function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${blockIndex}` });
});

// 새 블록을 채굴한다
app.get("/mine", function (req, res) {});

app.listen(3000, function () {
  console.log("Listening on port 3000..."); // 포트가 잘 동작해야 실행됨
});
