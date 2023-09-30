function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

/**
 * @param nonce 자격증명에서 온 숫자 값
 * proofOfWork 메소드를 통해 적법하게 새로운 블록을 만들었다는 증거
 * @param hash newTransactions를 해싱 함수에 전달했을 때 생성된 문자열
 */
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
    previousBlockHash,
    previousBlockHash,
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
  };
  this.pendingTransactions.push(newTransaction);
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

module.exports = Blockchain;
