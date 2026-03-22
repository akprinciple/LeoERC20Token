import { JsonRpcProvider } from "ethers";

export const jsonRpcProvider = new JsonRpcProvider(
    "https://rpc.sepolia-api.lisk.com"
    // import.meta.env.VITE_ROOTSTOCK_TESTNET_RPC_URL
);

