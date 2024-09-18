"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Question_Bottom from '@/Components/Question_Bottom'


const Page = () => {
    const [correct, setCorrect] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='flex justify-center align-middle items-center mt-5 lg:mt-9'>
                <div className=' cursor-pointer mr-2 lg:m-4'>
                    <Image src="/cross.png" alt='' height={32} width={32} className='' />
                </div>
                <progress className="progress w-56 lg:w-[990px] h-4 bg-[#E5E5E5] m-1" value={0} max="100"></progress>
                <div className='flex text-[#FF3A53] text-xl ml-2 lg:ml-4 font-extrabold'>
                    <Image src="/heart.png" alt='' height={35} width={35} />
                    <p className='flex justify-center items-center ml-3'>5</p>
                </div>
            </div>

            <div className='lg:w-[900px] flex justify-center items-center mt-5 text-[#3C3C3C] font-extrabold text-lg text-wrap lg:text-2xl'>
                <p className='text-center'>Select the matching pairs</p>
            </div>

            <div className='flex justify-center align-middle items-center'>
                <div className='mt-8 lg:mt-5 flex-wrap p-1'>
                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3" >
                        <div className="card-body p-2">
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    1
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2 m-1">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    2
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    3
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    4
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mt-8 lg:mt-5 flex-wrap p-1'>
                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3" >
                        <div className="card-body p-2">
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    5
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing....</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2 m-1">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    6
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    7
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-2 border-[#E5E5E5] lg:w-96 m-3">
                        <div className="card-body p-2">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                            <div className='flex justify-between gap-5'>
                                <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                    8
                                </div>
                                <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className={`hidden lg:fixed bottom-0 z-50 border-t-2 border-[#E5E5E5] w-full lg:flex justify-center align-middle items-center ${correct ? 'bg-[#D7FFB8]' : ''}`}>
              <Question_Bottom setCorrect={setCorrect}/>
            </div>
        </div>

    )
}

export default Page