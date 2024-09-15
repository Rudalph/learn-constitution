import React from 'react'
import Image from 'next/image'

const Right_Sidebar = () => {
    return (
        <div>
            <aside className="hidden lg:flex h-screen align-middle items-center  flex-col overflow-y-auto border-r bg-white px-5 py-8 fixed right-0 top-0">
                <div className='flex justify-center font-extrabold text-3xl text-[#58CC02] px-3'>
                    <div className='flex text-[#FC8806] text-xl px-5'><Image src="/national-emblem.png" alt='' height={35} width={35} /></div>
                    <div className='flex text-[#FC8806] text-xl px-5'><Image src="/fire.png" alt='' height={35} width={35} /><p className='flex justify-center align-middle items-center ml-3'>15</p></div>
                    <div className='flex text-[#088FE9] text-xl px-5'><Image src="/diamond.png" alt='' height={35} width={35} /><p className='flex justify-center align-middle items-center ml-3'>10</p></div>
                    <div className='flex text-[#FF3A53] text-xl px-5'><Image src="/heart.png" alt='' height={35} width={35} /><p className='flex justify-center align-middle items-center ml-3'>5</p></div>
                </div>
                <div className="mt-6 flex flex-1 flex-col justify-between">
                    <nav className="text-center mt-2">

                        <div className="card border-2 border-[#E5E5E5] w-96">
                            <div className="card-body">
                                <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold">Unlock Leaderboards!</h2>
                                <div className='flex justify-between'>
                                    <Image src="/shield-lock.png" alt='' height={60} width={60} />
                                    <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-2 border-[#E5E5E5] w-96 mt-5">
                            <div className="card-body">
                                <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold">Daily Quests</h2>
                                <div className='flex justify-between'>
                                    <Image src="/fire.png" alt='' height={60} width={60} />
                                    <div>
                                        <p className='flex justify-start align-middle items-center text-[#4B4B4B] font-extrabold'>Earn 10 XP</p>
                                        <div className='flex justify-between'>
                                            <progress className="progress w-56 h-4 bg-[#E5E5E5] mt-3 mr-3" value={0} max="100"></progress>
                                            <Image src="/red-gift.png" alt='' height={10} width={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-2 border-[#E5E5E5] w-96 mt-5">
                            <div className="card-body">
                                <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold w-72">Create profile to save progress</h2>
                                <div className='flex justify-center'>
                                    <button className="btn bg-[#58CC02] text-white rounded-2xl w-80 font-extrabold hover:bg-[#61E002]">CREATE A PROFILE</button>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="btn bg-[#1CB0F6] text-white rounded-2xl w-80 font-extrabold hover:bg-[#1FC2FF]">SIGN IN</button>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Right_Sidebar