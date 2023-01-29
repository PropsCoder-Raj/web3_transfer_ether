require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/ZTMWiSPh7PJtyrKDaS5SxAYCIgmVUtmS",
      accounts: ["08e3b47ddf873384db947d59125372079399a9f97011f910c7af571e307308e4"] 
    }
  }
};
