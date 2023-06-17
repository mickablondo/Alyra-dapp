
module.exports = {

  contracts_build_directory: "../client/src/contracts",
  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     // port: 7545,            // Ethereum port (default: none) for Ganache-Windows
     network_id: "*",       // Any network (default: none)
    }
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.20",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
  