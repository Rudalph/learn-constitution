import React from 'react'
import Image from 'next/image'

const Botton_Navigation = () => {
    return (
        <div className='lg:hidden'>
            <div className="btm-nav border-t-2 pb-10 pt-10">
                <button> 
                    <Image src="/home.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'/>
                </button>
                <button>
                    <Image src="/leaderboard.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ' />
                </button>
                <button>
                    <Image src="/quests.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ' />
                </button>
                <button>
                    <Image src="/shop.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ' />
                </button>
                <button>
                    <Image src="/profile.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ' />
                </button>
                <button>
                    <Image src="/more.png" alt='' height={45} width={45} className='flex transform items-center rounded-lg text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ' />
                </button>
            </div>
        </div>
    )
}

export default Botton_Navigation