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
    name: "Travelers",
    icon: (e, temp) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7ZM5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17Z"
          fill={(e || temp) ? "#F4425A" : "#8c8c8c"}
        />
        <path
          d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"
          fill={(e || temp) ? "#F4425A" : "#8c8c8c"}
        />
      </svg>
    ),
    path: "/dashboard",
  },
  // {
  //   name: "Messages",
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
  //         fill="#8C8C92"
  //       />
  //     </svg>
  //   ),
  //   path: "/Addtable",
  // },
  {
    name: "Favourites",
    icon: (e) => (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        className=""
        xmlns="http://www.w3.org/2000/svg"
      >
        {e ? (
          <path
            d="M18.2423 1.71125C20.5049 3.91912 20.5826 7.43663 18.4783 9.73081L9.99971 18L1.52135 9.73081C-0.582941 7.43663 -0.504282 3.91356 1.75733 1.71125C3.51538 -0.000717384 6.09303 -0.42817 8.26034 0.428887L4.34307 4.24408L5.75725 5.62118L9.99981 1.48986L9.98701 1.47639C9.99161 1.48039 9.99621 1.48441 10.0008 1.48843C12.3498 -0.564779 15.9797 -0.496615 18.2423 1.71125Z"
            fill="#F4425A"
          />
        ) : (
          <path
            d="M18.2426 1.75736C20.5053 4.02472 20.583 7.637 18.4786 9.993L9.9999 18.485L1.52138 9.993C-0.582952 7.637 -0.504292 4.01901 1.75736 1.75736C4.02157 -0.506849 7.64519 -0.583129 10.001 1.52853C12.35 -0.579999 15.98 -0.509999 18.2426 1.75736ZM3.17157 3.17157C1.68183 4.66131 1.60704 7.0473 2.97993 8.6232L9.9999 15.6543L17.0201 8.6232C18.3935 7.0467 18.319 4.66525 16.827 3.1701C15.3397 1.67979 12.9458 1.60806 11.3743 2.98376L7.17157 7.1869L5.75736 5.77264L8.582 2.946L8.5002 2.87701C6.92545 1.61197 4.62322 1.71993 3.17157 3.17157Z"
            fill="#8c8c8c"
          />
        )}
      </svg>
    ),
    path: "/favorite",
  },
  {
    name: "Visitors",
    icon: (e) => (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {e ? (
          <path
            d="M13 0L18 5V19.0082C18 19.556 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918C0 0.44405 0.44495 0 0.9934 0H13ZM9 9.5C10.3807 9.5 11.5 8.3807 11.5 7C11.5 5.61929 10.3807 4.5 9 4.5C7.6193 4.5 6.5 5.61929 6.5 7C6.5 8.3807 7.6193 9.5 9 9.5ZM4.52746 15H13.4725C13.2238 12.75 11.3163 11 9 11C6.68372 11 4.77619 12.75 4.52746 15Z"
            fill="#F4425A"
          />
        ) : (
          <path
            d="M12 2H2V18H16V6H12V2ZM0 0.9918C0 0.44405 0.44749 0 0.9985 0H13L17.9997 5L18 18.9925C18 19.5489 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918ZM9 9.5C7.6193 9.5 6.5 8.3807 6.5 7C6.5 5.61929 7.6193 4.5 9 4.5C10.3807 4.5 11.5 5.61929 11.5 7C11.5 8.3807 10.3807 9.5 9 9.5ZM4.52746 15C4.77619 12.75 6.68372 11 9 11C11.3163 11 13.2238 12.75 13.4725 15H4.52746Z"
            fill={e ? "#F4425A" : "#8c8c8c"}
          />
        )}
      </svg>
    ),
    path: "/visitors",
  },
  {
    name: "My Profile",
    icon: (e) => (
      <svg
        width="16"
        height="21"
        viewBox="0 0 16 21"
        fill={e ? "#F4425A" : "#1B1C31"}
        className="#F4425A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
          fill={e ? "#F4425A" : "#8c8c8c"}
        />
      </svg>
    ),
    path: "/myprofile",
  },
  // {
  //   name: "Support",
  //   icon: (
  //     <svg
  //       width="22"
  //       height="22"
  //       viewBox="0 0 22 22"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M18.9381 7H20C21.1046 7 22 7.89543 22 9V13C22 14.1046 21.1046 15 20 15H18.9381C18.446 18.9463 15.0796 22 11 22V20C14.3137 20 17 17.3137 17 14V8C17 4.68629 14.3137 2 11 2C7.68629 2 5 4.68629 5 8V15H2C0.89543 15 0 14.1046 0 13V9C0 7.89543 0.89543 7 2 7H3.06189C3.55399 3.05369 6.92038 0 11 0C15.0796 0 18.446 3.05369 18.9381 7ZM2 9V13H3V9H2ZM19 9V13H20V9H19ZM6.75944 14.7849L7.81958 13.0887C8.74161 13.6662 9.8318 14 11 14C12.1682 14 13.2584 13.6662 14.1804 13.0887L15.2406 14.7849C14.0112 15.5549 12.5576 16 11 16C9.4424 16 7.98882 15.5549 6.75944 14.7849Z"
  //         fill="#8C8C92"
  //       />
  //     </svg>
  //   ),
  //   path: "/intigration",
  // },
];

export default Menu;
