const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.connect(deployer).deploy("Election 2024", 3600); // 1 hour duration
  // await voting.deployed(); // Await the deployment transaction to be mined

  console.log("Voting contract deployed to:", voting.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
