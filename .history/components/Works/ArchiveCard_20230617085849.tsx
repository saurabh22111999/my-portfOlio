import React from 'react'
import { FaRegFolder} from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

const ArchiveCard = () => {
  return (
    <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col
    justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
      <div className='flex justify-between items-center'>
        <FaRegFolder className='text-4xl text-textGreen'/>
        <RxOpenInNewWindow className='text-4xl hover:text-textGreen'/>
      </div>
      <div>
        <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>Twitter Sentimental analysis</h2>
        <p className='text-sm mt-3'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, eius.</p>
      </div>
    </div>
  )
}

export default ArchiveCard