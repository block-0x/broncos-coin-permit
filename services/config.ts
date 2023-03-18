require("dotenv").config();

const config = {
  INFURA_ID: process.env.INFURA_ID || "",
  NODE_URL: process.env.NODE_URL || "",
  PRIVATE_KEY: process.env.PRIVATE_KEY || "",
  DEPLOYER_ADDRESS: process.env.DEPLOYER_ADDRESS || "",
  ACCESS_CONTROLLER_CONTRACT_ADDRESS:
    process.env.ACCESS_CONTROLLER_CONTRACT_ADDRESS || "",
  BRONCOSCOIN_WHITELIST_CONTRACT_ADDRESS:
    process.env.BRONCOSCOIN_WHITELIST_CONTRACT_ADDRESS || "",
  BRONCOSCOIN_CONTRACT_ADDRESS: process.env.BRONCOSCOIN_CONTRACT_ADDRESS || "",
  FANIQUE_WHITELIST_CONTRACT_ADDRESS:
    process.env.FANIQUE_WHITELIST_CONTRACT_ADDRESS || "",
  FANIQUE_ERC721_WHITELIST_CONTRACT_ADDRESS:
    process.env.FANIQUE_ERC721_WHITELIST_CONTRACT_ADDRESS || "",
  FANIQUE_SECONDARY_MARKET_CONTRACT_ADDRESS:
    process.env.FANIQUE_SECONDARY_MARKET_CONTRACT_ADDRESS || "",
  FANIQUE_MARKETPLACE_CONTRACT_ADDRESS:
    process.env.FANIQUE_MARKETPLACE_CONTRACT_ADDRESS || "",
  FANIQUE_ERC721_CONTRACT_ADDRESS:
    process.env.FANIQUE_ERC721_CONTRACT_ADDRESS || "",
  USER1_ADDRESS: process.env.USER1_ADDRESS || "",
  USER1_PRIVATE_KEY: process.env.USER1_PRIVATE_KEY || "",
  USER2_ADDRESS: process.env.USER2_ADDRESS || "",
  USER2_PRIVATE_KEY: process.env.USER2_PRIVATE_KEY || "",
  USER3_ADDRESS: process.env.USER3_ADDRESS || "",
  USER3_PRIVATE_KEY: process.env.USER3_PRIVATE_KEY || "",
  USER4_ADDRESS: process.env.USER4_ADDRESS || "",
  USER4_PRIVATE_KEY: process.env.USER4_PRIVATE_KEY || "",
  WMATIC: process.env.WMATIC || "",
  RELAY_API_KEY: process.env.RELAY_API_KEY || "",
  RELAY_API_SECRET: process.env.RELAY_API_SECRET || "",
  ACCESS_CONTROLLER_CONTRACT_ABI:
    require("../artifacts/contracts/AccessControl/AccessControllerUpgradeable.sol/AccessControllerUpgradeable.json")
      .abi,
  BRONCOSCOIN_WHITELIST_CONTRACT_ABI:
    require("../artifacts/contracts/WhiteList/BroncosCoinWhiteListUpgradeable.sol/BroncosCoinWhiteListUpgradeable.json")
      .abi,
  BRONCOSCOIN_CONTRACT_ABI:
    require("../artifacts/contracts/FungibleToken/BroncosCoin.sol/BroncosCoin.json")
      .abi,
  FANIQUE_WHITELIST_CONTRACT_ABI:
    require("../artifacts/contracts/WhiteList/FaniqueWhiteListUpgradeable.sol/FaniqueWhiteListUpgradeable.json")
      .abi,
  FANIQUE_ERC721_WHITELIST_CONTRACT_ABI:
    require("../artifacts/contracts/WhiteList/FaniqueERC721WhiteListUpgradeable.sol/FaniqueERC721WhiteListUpgradeable.json")
      .abi,
  FANIQUESE_CONDARY_MARKET_WHITELIST_CONTRACT_ABI:
    require("../artifacts/contracts/WhiteList/FaniqueSecondaryMarketWhiteListUpgradeable.sol/FaniqueSecondaryMarketWhiteListUpgradeable.json")
      .abi,
  FANIQUE_MARKETPLACE_CONTRACT_ABI:
    require("../artifacts/contracts/Marketplace/FaniqueMarketplace.sol/FaniqueMarketplace.json")
      .abi,
  FANIQUE_ERC721_CONTRACT_ABI:
    require("../artifacts/contracts/NonFungibleToken/FaniqueERC721.sol/FaniqueERC721.json")
      .abi,
  WMATIC_CONTRACT_ABI:
    require("../artifacts/contracts/FungibleToken/WETH9.sol/WETH9.json").abi,
};

module.exports = { config };
