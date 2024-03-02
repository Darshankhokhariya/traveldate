import React from 'react'

const Select = (props) => {
    const { data, label } = props;
    return (
        <div>
            <div className="text-gray-400">{label}</div>
            <select className='block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white '  >
                {
                    data?.map((item) => {
                        return (
                            <option value={item?.value}>{item?.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select