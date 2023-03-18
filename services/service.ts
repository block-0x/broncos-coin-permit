const { signERC2612Permit } = require("eth-permit");

import { Contract, providers, Wallet, Signer } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider';
import { env } from "process";
const { common } = require('@ethereumjs/common');
import Web3 from "web3";
export const web3: Web3 = new Web3(new Web3.providers.HttpProvider(env.NEXT_PUBLIC_NODE_URL || ""));
import {getMetamaskSigner } from '../services/web3.utils.js';

export async function initWallet(prvKey = "") {
  console.log("initWallet()")
  const HTTPSProvider = new providers.JsonRpcProvider(env.NEXT_PUBLIC_NODE_URL || "");
  if (prvKey === "") {
    const metamaskSigner = await getMetamaskSigner();
    console.log("metamaskSigner()", metamaskSigner)
    return metamaskSigner.data.provider;
  } else {
    return await new Wallet(prvKey, HTTPSProvider);
  }
}

async function initAccessController(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_ACCESS_CONTROLLER_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_ACCESS_CONTROLLER_CONTRACT_ABI || "",
    wallet
  );
}

async function initBroncosCoin(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_BRONCOSCOIN_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_BRONCOSCOIN_CONTRACT_ABI || "",
    wallet
  );
}

async function initMarketplace(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_FANIQUE_MARKETPLACE_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_FANIQUE_MARKETPLACE_CONTRACT_ABI || "",
    wallet
  );
}

async function initFaniqueERC721(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_FANIQUE_ERC721_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_FANIQUE_ERC721_CONTRACT_ABI || "",
    wallet
  );
}

async function initWhiteList(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_FANIQUE_WHITELIST_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_FANIQUE_WHITELIST_CONTRACT_ABI || "",
    wallet
  );
}

async function initERC721WhiteList(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_FANIQUE_ERC721_WHITELIST_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_FANIQUE_ERC721_WHITELIST_CONTRACT_ABI || "",
    wallet
  );
}

async function initSecondaryMarketWhiteList(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_FANIQUE_SECONDARY_MARKET_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_FANIQUESE_CONDARY_MARKET_WHITELIST_CONTRACT_ABI || "",
    wallet
  );
}

async function initBroncosCoinWhiteList(wallet: any) {
  return await new Contract(
    env.NEXT_PUBLIC_BRONCOSCOIN_WHITELIST_CONTRACT_ADDRESS || "",
    env.NEXT_PUBLIC_BRONCOSCOIN_WHITELIST_CONTRACT_ABI || "",
    wallet
  );
}

async function initWMATIC(wallet: any) {
  return await new Contract(env.NEXT_PUBLIC_WMATIC || "", env.NEXT_PUBLIC_WMATIC_CONTRACT_ABI || "", wallet);
}

export async function getEstimate(
  data: string,
  nonce: number,
  to: string,
  from: string,
  value = "0x0"
) {
  return await web3.eth.estimateGas({
    nonce: nonce,
    from: from,
    to: to,
    value: value,
    data: data,
  });
}
export async function initContract(wallet: any) {
  const accessController: Contract = await initAccessController(wallet);
  const broncosCoin: Contract = await initBroncosCoin(wallet);
  const marketplace: Contract = await initMarketplace(wallet);
  const nft: Contract = await initFaniqueERC721(wallet);
  const whiteList: Contract = await initWhiteList(wallet);
  const erc721WhiteList: Contract = await initERC721WhiteList(wallet);
  const secondaryMarketWhiteList: Contract = await initSecondaryMarketWhiteList(
    wallet
  );
  const broncosCoinWhiteList: Contract = await initBroncosCoinWhiteList(wallet);
  const weth: Contract = await initWMATIC(wallet);

  return {
    accessController,
    broncosCoin,
    whiteList,
    erc721WhiteList,
    secondaryMarketWhiteList,
    broncosCoinWhiteList,
    marketplace,
    nft,
    weth,
  };
}

async function permit(provider: providers.Web3Provider, amount: number) {
  console.log("permit()")

  console.log("provider = ", provider)
  const signer = await provider.getSigner();
  const address: string = await signer.getAddress();
  const tokenAddress: string = "0xCe08088b750534CBFeE3812AE02f5B5dc73e7a75";
  const spender: string = "0x661c8E0686bC2c9Bff7E624045CDf4e22ED281e4";

  console.log("signer = ", signer)
  console.log("address = ", address)
  console.log("tokenAddress = ", tokenAddress)
  console.log("spender = ", spender)

  const result = await signERC2612Permit(
    signer,
    tokenAddress,
    address,
    spender,
    amount
  );

  console.log("result = ", result)

  return result;
}

module.exports = {
  web3,
  initWallet,
  initContract,
  getEstimate,
  permit
};
