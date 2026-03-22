import { useAppKitAccount } from "@reown/appkit/react";
import { useTokenContract } from "../useContract";
import { useCallback, useState } from "react";


export const useReadToken = () => {
  const todoContract = useTokenContract();
  const { address } = useAppKitAccount();
  const [loading, setloading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");
  const [symbol, setsymbol] = useState('')
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setmaxSupply] = useState(0);


    const readBalance = useCallback(async() : Promise<number>=> {
      if (!todoContract) {
        return 0
      };
        try {
          setloading(true);
          const balance = await todoContract?.balanceOf(address);
          setBalance(Number(balance));
          return Number(balance);
        } catch (error) {
          return 0;
        }finally{
          setloading(false);
        }
      
      },
      [todoContract, address, setBalance],
    )
    const getName = useCallback(async() : Promise<string>=> {
      if (!todoContract) {
        return "";
      };
        try {
          setloading(true);
          const Name = await todoContract?.name();
          setName(Name);
          return Name;
          
        } catch (error) {
          return "";
        }finally{
          setloading(false);
        }
      
      },
      [todoContract],
    )

    const getSymbol = useCallback(async() : Promise<string>=> {
      if (!todoContract) {
        return "";
      };
        try {
          setloading(true);
          const symbol = await todoContract?.symbol();
          setsymbol(symbol);
          return symbol;
          
        } catch (error) {
          return "";
        }finally{
          setloading(false);
        }
      
      },
      [todoContract],
    )

    const getTotalSupply = useCallback(async() : Promise<number>=> {
      if (!todoContract) {
        return 0;
      };
        try {
          setloading(true);
          const totalSupply = await todoContract?.totalSupply();
          setTotalSupply(Number(totalSupply));
          return Number(totalSupply);
          
        } catch (error) {
          return 0;
        }finally{
          setloading(false);
        }
      
      },
      [todoContract],
    )
    const getMaxSupply = useCallback(async() : Promise<number>=> {
      if (!todoContract) {
        return 0;
      };
        try {
          setloading(true);
          const maxSupply = await todoContract?.maxSupply();
          setmaxSupply(Number(maxSupply));
          return Number(maxSupply);
          
        } catch (error) {
          return 0;
        }finally{
          setloading(false);
        }
      
      },
      [todoContract],
    )



    return { readBalance, loading, balance, getName, name, getSymbol, symbol, 
      getTotalSupply, totalSupply, getMaxSupply, maxSupply};
  

}