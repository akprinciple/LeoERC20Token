import { useCallback, useEffect, useState } from "react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useReadToken } from "./specific/useReadToken";
import { toast } from "react-toastify";
import { useWriteToken } from "./specific/useWriteToken";


const useHooks = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { open } = useAppKit();
  const { address } = useAppKitAccount();
  const [transferAmount, settransferAmount] = useState(0);
  const [toAddress, settoAddress] = useState('')
  
  const handleConnect = () => {
    open();
    setIsConnected(true);
  };
  const {readBalance, balance, getName, name, getSymbol, symbol, 
    getTotalSupply, totalSupply, getMaxSupply, maxSupply} = useReadToken();
    const {Transfer, ClaimFaucet, Mint} = useWriteToken();
  useEffect(() => {
     readBalance();
     getName();
     getSymbol();
     getTotalSupply();
     getMaxSupply();
  }, [balance])

  const makeTransfer = useCallback(async() => {
    const checkTransfer = await Transfer(toAddress, transferAmount);
    if (!checkTransfer) return;
    toast.success("Transfer was successful")
    readBalance();
  },
  [Transfer, toAddress, transferAmount, readBalance],
)

  const makeClaim = useCallback(async () => {
    const checkClaim = await ClaimFaucet();
    if (!checkClaim) return;
    toast.success("Successfully claimed 100 LEO!");
    readBalance();
  }, [ClaimFaucet, readBalance]);

  const makeMint = useCallback(async (amount: number) => {
    const checkMint = await Mint(amount);
    if (!checkMint) return;
    toast.success("Minting was successful");
    readBalance();
    getTotalSupply();
  }, [Mint, readBalance, getTotalSupply]);

  return { isConnected, handleConnect, open, 
    address, readBalance, balance, getName, name, symbol, getTotalSupply, 
    totalSupply, maxSupply, settoAddress, settransferAmount, makeTransfer, makeClaim, makeMint};
}




export default useHooks;