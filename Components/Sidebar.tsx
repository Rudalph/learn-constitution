import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex h-screen w-64 flex-col overflow-y-auto border-r-2 bg-white px-5 py-8 fixed left-0 top-0">
            <div className='font-extrabold text-3xl text-[#58CC02] px-3'><a href="/">Connect</a></div>
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="text-center mt-2">
                    <div className="text-center">
                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/home.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">LEARN</span>
                            </div>
                        </a>

                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/leaderboard.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">LEADERBOARD</span>
                            </div>
                        </a>

                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/quests.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">QUESTS</span>
                            </div>
                        </a>

                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/shop.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">SHOP</span>
                            </div>
                        </a>
                        
                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/profile.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">PROFILE</span>
                            </div>
                        </a>

                        <a className="flex transform items-center rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700" href="#">
                            <div className='flex'>
                                <Image src="/more.png" alt='' height={40} width={40} className='mr-2'/>
                                <span className="mx-2 text-base font-extrabold text-[#777788] flex justify-center align-middle items-center">MORE</span>
                            </div>
                            
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar