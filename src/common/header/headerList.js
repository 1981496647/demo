import header_1 from "../../assets/img/header/header_1.svg";
import header_2 from "../../assets/img/header/header_2.svg";
import header_3 from "../../assets/img/header/header_3.svg";
export const list = [
  { name: "Faucet", icon: header_1, arr: [] },
  {
    name: "Blocks",
    icon: header_2,
    iconActive: header_3,
    arr: [
      { name: "Blocks", value: 0 },
      { name: "Uncles", value: 1 },
      { name: "Forked Blocks (Reorgs)", value: 2 },
    ],
  },
  {
    name: "Transactions",
    icon: header_2,
    iconActive: header_3,
    arr: [
      { name: "Validated ", value: 0 },
      { name: "Pending", value: 1 },
    ],
  },
  {
    name: "Tokens",
    icon: header_2,
    iconActive: header_3,
    arr: [
      { name: "All", value: 0 },
      { name: "Mmt", value: 1 },
    ],
  },
  {
    name: "APIs",
    icon: header_2,
    iconActive: header_3,
    arr: [
      { name: "GraphQL", value: 0 },
      { name: "RPC", value: 1 },
      { name: "Eth RPC", value: 2 },
    ],
  },
];
