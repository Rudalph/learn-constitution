"use client"
import React from 'react'
import Image from 'next/image'
import Question_Bottom from '@/Components/Question_Bottom'


const page = () => {
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
            <div className='flex justify-between align-middle items-center flex-wrap'>
                <div className='lg:h-96 lg:w-[500px] flex justify-center align-middle items-center mt-10 p-5 '>
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2020/11/Constitution-of-India-1024x576.png" alt="#" className=' object-cover rounded-lg' />
                </div>



                <div className='lg:p-10 items-end'>
                    <div className='lg:w-[700px] flex justify-center align-middle items-center lg:ml-10  mt-10 text-[#3C3C3C] font-extrabold text-lg text-wrap lg:text-2xl'>
                        <p className='text-center'>The question will be MCQ-based and will be asked on the Constitution of India, Part 4 (Union) and Part 5 (States)?</p>
                    </div>

                    <div className='flex justify-around gap-6 align-middle items-center mt-8 lg:mt-24 flex-wrap p-1'>
                        <div className="card border-2 border-[#E5E5E5] lg:w-96" >
                            <div className="card-body p-2">
                                <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                                <div className='flex justify-between gap-5'>
                                    <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                        1
                                    </div>
                                    <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-2 border-[#E5E5E5] lg:w-96">
                            <div className="card-body p-2">
                                <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                                <div className='flex justify-between gap-5'>
                                    <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                        2
                                    </div>
                                    <p className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around gap-6 align-middle items-center mt-7 flex-wrap p-1'>
                        <div className="card border-2 border-[#E5E5E5] lg:w-96">
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

                        <div className="card border-2 border-[#E5E5E5] lg:w-96">
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
                </div>

            </div>
            <div className='hidden lg:fixed bottom-0 z-50 border-t-2 border-[#E5E5E5] w-full lg:flex justify-center align-middle items-center'>
              <Question_Bottom />
            </div>
        </div>

    )
}

export default page