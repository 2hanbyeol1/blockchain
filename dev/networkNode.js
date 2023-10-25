const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const port = process.argv[2]; // script: 3001

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
app.get("/mine", function (req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];

  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock["index"] + 1,
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  const nodeAddress = uuidv4().split("-").join("");
  bitcoin.createNewTransaction(12.5, "00", nodeAddress); // 채굴 보상 - 송신자 주소 "00"

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: "New block mined successfully",
    block: newBlock,
  });
});

app.post("/register-and-broadcast-node", function (req, res) {
  const newNodeUrl = req.body.newNodeUrl;
});

app.listen(port, function () {
  console.log(`Listening on port ${port}...`); // 포트가 잘 동작해야 실행됨
});
