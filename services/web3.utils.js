import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

export const getMetamaskSigner = async() => {
    try {
        const browserProvider = await detectEthereumProvider();
        if (browserProvider && browserProvider.isMetaMask !== true) {
            return {
                success: false,
                data: {
                    message: 'Please install Metamask',
                },
            };
        }

        let walletAccounts;
        const provider = new ethers.providers.Web3Provider(browserProvider);
        const signer = provider.getSigner();
        walletAccounts = await provider.listAccounts();
        if (walletAccounts.length === 0 && provider && provider.provider) {
            await provider.provider.request({ method: 'eth_requestAccounts' });
            walletAccounts = await provider.listAccounts();
        }

        const chainId = await signer.getChainId();

        return {
            success: true,
            data: {
                signer,
                provider,
                wallet_address: walletAccounts[0],
                chain: chainId,
            },
        };
    } catch (error) {
        return {
            success: false,
            data: {
                message: error,
            },
        };
    }
};