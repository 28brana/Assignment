import Bitcoin from "../images/Bitcoin.svg";
import Binance from "../images/Binance.svg";
import Shiba from "../images/Shiba.svg";
import Solana from "../images/Solana.svg";
import Ethereum from "../images/Ethereum.svg";
import { CardProps } from "../../interface/card.interface";

export const Data:CardProps[] = [
  {
    avatar: Bitcoin,
    totalAmount: 20000,
    price: 345000,
    pl: 10,
    pairs: [Solana, Ethereum, Binance],
  },
  {
    avatar: Solana,
    totalAmount: 200,
    price: 5000,
    pl: 23.5,
    pairs: [Solana, Solana, Binance],
  },
  {
    avatar: Binance,
    totalAmount: 55000,
    price: 10000,
    pl: 11.93,
    pairs: [Solana, Ethereum, Binance],
  },
  {
    avatar: Ethereum,
    totalAmount: 88000,
    price: 12000,
    pl: -5.4,
    pairs: [Ethereum, Shiba, Binance],
  },
  {
    avatar: Shiba,
    totalAmount: 65000,
    price: 230000,
    pl: -12.3,
    pairs: [Binance, Ethereum, Binance],
  },
];
