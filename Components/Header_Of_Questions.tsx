import React from 'react'
import Image from 'next/image'
const Header_Of_Questions = () => {
  return (
    <div>
        <div className='flex justify-center align-middle items-center mt-5 lg:mt-9'>
                <div className=' cursor-pointer mr-2 lg:m-4'>
                    <a href="/"><Image src="/cross.png" alt='' height={32} width={32} className='' /></a>
                </div>
                <progress className="progress w-56 lg:w-[990px] h-4 bg-[#E5E5E5] m-1" value={0} max="100"></progress>
                <div className='flex text-[#FF3A53] text-xl ml-2 lg:ml-4 font-extrabold'>
                    <Image src="/heart.png" alt='' height={35} width={35} />
                    <p className='flex justify-center items-center ml-3'>5</p>
                </div>
            </div>
    </div>
  )
}

export default Header_Of_Questions