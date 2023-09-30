function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
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
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash,
    previousBlockHash,
  };
  this.newTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};
