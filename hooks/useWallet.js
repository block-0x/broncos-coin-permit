import { useEffect, useState } from 'react';
import { connectMetamask, getMetamaskSigner } from '../services/web3.utils.js';
import Web3 from 'web3';

export const useWallet = () => {
  const [address, setAddress] = useState();
  const [chain, setChain] = useState();
  const [chainHex, setChainHex] = useState();
  const [signer, setSigner] = useState();
  const [provider, setProvider] = useState();
  const [isLoading, setLoading] = useState(false);

  const fetchMetamaskSigner = async () => {
    setLoading(true);
    const responseMetamask = await getMetamaskSigner();

    const {
      signer: metamaskSigner,
      wallet_address,
      chain,
      provider,
    } = responseMetamask.data;

    setAddress(wallet_address);
    setSigner(metamaskSigner);
    setChain(chain);
    setProvider(provider);
    setChainHex(Web3.utils.toHex(chain));
    setLoading(false);
  };

  const connectWallet = async () => {
    setLoading(true);
    const responseMetamask = await connectMetamask();
    if (!responseMetamask.success) {
      return responseMetamask;
    }

    const { signer: metamaskSigner, wallet_address } = responseMetamask.data;

    setAddress(wallet_address);
    setSigner(metamaskSigner);
    setLoading(false);
  };

  useEffect(() => {
    fetchMetamaskSigner();
  }, []);

  return {
    signer,
    provider,
    address,
    connectWallet,
    isLoading,
    chain,
    chainHex,
  };
};
