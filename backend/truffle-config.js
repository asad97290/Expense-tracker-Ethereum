const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic, // meta mask seed phrase
          `wss://ropsten.infura.io/ws/v3/25c686ea2755414f875dec02984c3b50`
        ),
      network_id: 3, // Ropsten's id
      gas: 4000000, // Ropsten has a lower block limit than mainnet
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.0", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
