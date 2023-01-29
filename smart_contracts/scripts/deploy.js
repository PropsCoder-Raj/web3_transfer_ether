const hre = require("hardhat");

async function main() {
  const Transactions = await hre.ethers.getContractFactory("Transactions");  // Deployed Contract Address 0xe1B7eb5336240786a49d46Ac92012B230d6aeD5A
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log(
    `Transactions deployed to ${transactions.address}`
  );
}


const runFun = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("error-deploy: ", error);
  }
}

runFun();