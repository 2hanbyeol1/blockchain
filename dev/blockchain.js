const { v4: uuidv4 } = require("uuid");

const currentNodeUrl = process.argv[3];

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];
  this.createNewBlock(100, "0", "0"); // Genesis Block
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };
  this.pendingTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

/**
 *
 * @param amount 금액
 * @param sender 발송인 주소
 * @param recipient 수신자 주소
 * @returns 새로운 트랜잭션이 추가될 블록의 num
 */
Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient,
    transactionId: uuidv4().split("-").join(""),
  };
  return newTransaction;
};

Blockchain.prototype.addTransactionToPendingTransactions = function (
  transactionObj
) {
  this.pendingTransactions.push(transactionObj);
  return this.getLastBlock()["index"] + 1;
};

const sha256 = require("sha256");
Blockchain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

Blockchain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  // hash값이 0000으로 시작할 때까지 반복
  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }
  return nonce;
};

Blockchain.prototype.chainIsValid = function (blockchain) {
  let validChain = true;
  for (var i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const prevBlock = blockchain[i - 1];
    const blockHash = this.hashBlock(
      prevBlock.hash,
      {
        transactions: currentBlock["transactions"],
        index: currentBlock["index"],
      },
      currentBlock["nonce"]
    );
    if (currentBlock.previousBlockHash !== prevBlock.hash) validChain = false;
    if (blockHash.substring(0, 4) !== "0000") validChain = false;

    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock.nonce === 100;
    const correctPreviousBlockHash = genesisBlock.previousBlockHash === "0";
    const correctHash = genesisBlock.hash === "0";
    const correctTransactions = genesisBlock.transactions.length === 0;
    if (
      !correctNonce ||
      !correctPreviousBlockHash ||
      !correctHash ||
      !correctTransactions
    )
      validChain = false;
  }
  return validChain;
};

module.exports = Blockchain;
