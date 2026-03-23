import { useAppKitAccount } from "@reown/appkit/react";
import { useTokenContract } from "../useContract";
import { useCallback, useState } from "react";
import { ErrorDecoder } from "ethers-decode-error";
import { toast } from "react-toastify";
const errorDecoder = ErrorDecoder.create();


export const useWriteToken = () => {
  const tokenContract = useTokenContract(true);
  const { address } = useAppKitAccount();
  const [loadingTransfer, setloadingTransfer] = useState(false);

  const Transfer = useCallback(async(toAddress : string, amount: number) : Promise<boolean> => {
    if (!address) {
      toast.error("Wallet not connected!");
      return false;
    }
    if (!tokenContract) {
      toast.error("Contract not found!");
      return false;
    }
    try {
        setloadingTransfer(true);
        
        const transferTx = await tokenContract.transfer(toAddress, amount);
        const receipt = await transferTx.wait();
        return receipt.status === 1;
    } catch (error) {
        const decodedError = await errorDecoder.decode(error);
        toast.error(decodedError.reason);
        return false;
    }
  }, [address, tokenContract]);

  const ClaimFaucet = useCallback(async () => {
    if (!address) {
      toast.error("Wallet not connected!");
      return false;
    }
    if (!tokenContract) {
      toast.error("Contract not found!");
      return false;
    }
    try {
      
      const amount = 100;
      const tx = await tokenContract.requestTokens(amount);
      
      toast.info("Claim transaction pending...");
      const receipt = await tx.wait(); 
      return receipt.status === 1;
    } catch (error) {
      const decodedError = await errorDecoder.decode(error);
      toast.error(decodedError.reason || "Failed to claim tokens. You may need to wait 24 hours.");
      return false;
    }
  }, [address, tokenContract]);

  const Mint = useCallback(async (amount: number): Promise<boolean> => {
    if (!address) {
      toast.error("Wallet not connected!");
      return false;
    }
    if (!tokenContract) {
      toast.error("Contract not found!");
      return false;
    }
    try {
      const tx = await tokenContract.mint(amount);
      toast.info("Mint transaction pending...");
      const receipt = await tx.wait();
      return receipt.status === 1;
    } catch (error) {
      const decodedError = await errorDecoder.decode(error);
      toast.error(decodedError.reason || "Failed to mint tokens.");
      return false;
    }
  }, [address, tokenContract]);

  return { Transfer, loadingTransfer, setloadingTransfer, ClaimFaucet, Mint }
}