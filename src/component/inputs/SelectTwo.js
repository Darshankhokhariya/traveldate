import React from "react";

const SelectTwo = (props) => {
  const { data, label, value, onChange, placeHolder, name } = props;
  console.log('value', value)
  return (
    <div>
      {/* <div className="text-gray-400">{label}</div> */}
      <select onChange={onChange} name={name} value={value} className="select-custom-two block w-full py-2 pl-4  placeholder-gray-400  text-secondary1 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white ">
        <option value="">{placeHolder}</option>
        {data && data?.map((item, index) => {
          return (
            <option key={index} value={item[label]}>
              {item[label]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTwo;
