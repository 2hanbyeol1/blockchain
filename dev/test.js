const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const previousBlockHash = "87765DA6CCF0668238C1D27C35692E11";
const currentBlockData = [
  {
    amount: 10,
    sender: "B4CEE9C0E5CD793",
    recipient: "ASDFDFSDFI12SDSD",
  },
  {
    amount: 20,
    sender: "ABSDF897985CD793",
    recipient: "3ADFSDFI12SDSD",
  },
  {
    amount: 30,
    sender: "C4SDF354C0E5CD793",
    recipient: "BSDF98795FI1SD",
  },
];
const nonce = 100;
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
