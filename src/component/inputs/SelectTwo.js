import React from "react";

const SelectTwo = (props) => {
  const { data, label } = props;
  return (
    <div>
      <div className="text-gray-400">{label}</div>
      <select className="select-custom-two block w-full py-2 pl-4  placeholder-gray-400  text-secondary1 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white ">
        {data?.map((item, index) => {
          return (
            <option key={index} value={item?.value}>
              {item?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTwo;
