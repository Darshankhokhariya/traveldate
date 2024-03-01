import { AiOutlineHome } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import {
  BsBag,
  BsCart2,
  BsDiagram2Fill,
  BsFillCaretDownFill,
  BsPlusSquareFill,
} from "react-icons/bs";

const Menu = [
  {
    name: "Home",
    icon: <AiOutlineHome className="w-[18px] h-[18px]" />,
    path: "/dashboard",
  },
  {
    name: "inventory",
    path: "/addtable",
    icon: <BsCart2 className="w-[18px] h-[18px]" />,
    path: "",
    child: [
      {
        name: "Add item",
        icon: <BsPlusSquareFill />,
        path: "/addtable",
      },
      {
        name: "item-group",
        icon: <BsFillCaretDownFill />,
      },
    ],
  },
  {
    name: "Purchases",
    icon: <BsBag className="w-[18px] h-[18px]" />,
    path: "/Addtable",
    // child:[
    //     {
    //         name:'Vendors',
    //         path:'/vendor'
    //     },
    //     {
    //         name:'Purchase Orders',
    //         path:'/purchase'
    //     }
    // ]
  },
  {
    name: "Intigration",
    icon: <BsDiagram2Fill className="w-[18px] h-[18px]" />,
    path: "/intigration",
  },
];

export default Menu;
