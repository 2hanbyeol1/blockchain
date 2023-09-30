const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, "A1S2DF5DF6SD5", "59SFS8AS4DJK");
bitcoin.createNewTransaction(100, "ALEX98DSF15SD", "JENNF8DF4456");
console.log(bitcoin);
