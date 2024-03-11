import React from "react";

const Select = (props) => {
    const { name, data, label, onChange, value } = props;
    return (
        <div>
            <div className="text-gray-400">{label}</div>

            <select value={value} onChange={onChange} name={name} className='capitalize select-custom block w-full py-2 pl-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white '  >
                <option value="">Select {label}</option>
                {
                    data?.map((item, index) => {
                        return (
                            <option className="capitalize" key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;
