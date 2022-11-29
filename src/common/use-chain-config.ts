import { useSelector } from "react-redux";

export type ChainConfig = {
  chainId: number;
  chainName: string;
  symbol: string;
  rpcUrls: string[];
  decimals: number;
  networkPath: string;
};

export function useChainConfig(): ChainConfig {
  return {
    chainId: 7778,
    chainName: "BoomMo Chain",
    symbol: "BMO",
    rpcUrls: ["https://api-testnet.boommo.com"],
    decimals: 18,
    networkPath: "",
  };
}
