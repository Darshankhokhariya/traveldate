import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Secondarybutton from '../Buttons/Secondarybutton'

function ReferModal({ isOpen, onClose }) {

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className='w-full'>
                    <div className="w-full sm:w-fit max-w-[80%] flex flex-col items-center mx-auto">
                        <div className='font-semibold'>
                            I prefer to travel with ...
                        </div>
                        <div className='text-gray-500 text-sm text-center mt-2'>
                            Adjust your preferences to see and be seen by those who fit them.
                        </div>
                        <div className='flex gap-10 mt-8'>
                            <img class="relative inline-block h-32 w-32 rounded-full border-4 border-primary object-cover object-center" alt="Image placeholder" src="/images1/male.png" />
                            <img class="relative inline-block h-32 w-32 rounded-full object-cover object-center" alt="Image placeholder" src="/images1/female.png" />
                        </div>

                        <div className='mt-8'>
                            <Secondarybutton text="Save prefrences" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ReferModal