const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1698919747280,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1698919774111,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1698919983675,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "41be59e999684093871a202e51e40002",
          transactionId: "601ed6a635914937baed5664d079a2ca",
        },
        {
          amount: 10,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "022314604b7e445d97bd805ec67f173c",
        },
        {
          amount: 102,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "7a9b0112933b476bbdb51ade2fd6b45b",
        },
        {
          amount: 1023,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "734cdf773751472b8561e67329eeb3a1",
        },
      ],
      nonce: 51231,
      hash: "000027eab9f2f3fed418e6919a413ccf3e43c004e570ffdfdc97a2ffb5a0a6e1",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1698920048514,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "76a00cf7e2e6421c88c562211e51a07c",
          transactionId: "b461969055ae458a959ef02e309ddaaa",
        },
        {
          amount: 1022323,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "06f2e9f9cb7d42689617200d7ad75080",
        },
        {
          amount: 1,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "a1c66c7c357c440cb3e368666f0146f6",
        },
        {
          amount: 19,
          sender: "ABCDE",
          recipient: "FGHIJ",
          transactionId: "87cd5aec5cc54b2fa6acbbd2f302833c",
        },
      ],
      nonce: 39955,
      hash: "0000ec500fd897c2172bf47bf79ebf7addf55c7aa3af3149eb0bdbcaa33f39c0",
      previousBlockHash:
        "000027eab9f2f3fed418e6919a413ccf3e43c004e570ffdfdc97a2ffb5a0a6e1",
    },
    {
      index: 5,
      timestamp: 1698920061043,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "f2e3906892244710958621d382eb48b1",
          transactionId: "b62d5b36fbe546bca9b954af6a9ec3af",
        },
      ],
      nonce: 1912,
      hash: "000022d9bc35ceaa4221c7b61323ebf492952530bb4fc832c9990ba1b97b532b",
      previousBlockHash:
        "0000ec500fd897c2172bf47bf79ebf7addf55c7aa3af3149eb0bdbcaa33f39c0",
    },
    {
      index: 6,
      timestamp: 1698920063118,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "23a18de721c044339046c80f2791ee6f",
          transactionId: "4473122fc3484030a578ec2a1f9cd1d7",
        },
      ],
      nonce: 57065,
      hash: "000068041c5625f198502e5a7005d3d6db40496c1ec7b67571121606c799e921",
      previousBlockHash:
        "000022d9bc35ceaa4221c7b61323ebf492952530bb4fc832c9990ba1b97b532b",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "fb0f37c98959445cb61f5c0a27337091",
      transactionId: "52e215f6299c4b4f8630a980111bca30",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
