const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("RewardsToken");
  const token = await Token.deploy();

  await token.deployed();

  console.log("RewardsToken deployed to:", token.address);

  const Farm = await hre.ethers.getContractFactory("Farm");
  const farm = await Farm.deploy(token.address);

  await farm.deployed();
  console.log("Farm deployed to:", farm.address);
  console.log("Current owner of token contract: ", await token.owner());
  await token.transferOwnership(farm.address);
  console.log("New owner of token contract: ", await token.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
