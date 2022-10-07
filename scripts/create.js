const { ethers, upgrades } = require("hardhat");

async function main() {
	const PassportTicket = await ethers.getContractFactory("PassportTicket");
	const passportTicket = await upgrades.deployProxy(PassportTicket, ["Big Mother's DAO", "BMD", "https://d369mch47ynfnd.cloudfront.net"]);
	await passportTicket.deployed();
	console.log("PassportTicket deployed to:", passportTicket.address);
}

main();
