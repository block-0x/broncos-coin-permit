import { useMemo } from 'react';
import { useWallet } from './useWallet';

const config = require('../config.json');
export const useStore = () => {
  const { signer } = useWallet();

  return { signer };
};
