import { useMemo } from "react";
import { Contract } from "ethers";
import { getAddress } from "ethers";
import useRunners from "./useRunner";
import { TOKEN_FAUCET_ABI } from "../ABI/tokenABI";

export const useTokenContract = (withSigner = false) => {
  const { readOnlyProvider, signer } = useRunners();

  return useMemo(() => {
    if (withSigner) {
      if (!signer) return null;
      return new Contract(
        getAddress("0xDcEb2FbD4e54A5c40952d0965c38B2e8fDAdf202"),
        // getAddress(import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS),
        TOKEN_FAUCET_ABI,
        signer
      );
    }
    return new Contract(
      getAddress("0xDcEb2FbD4e54A5c40952d0965c38B2e8fDAdf202"),
      // getAddress(import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS),
      TOKEN_FAUCET_ABI,
      readOnlyProvider
    );
  }, [readOnlyProvider, signer, withSigner]);
};
