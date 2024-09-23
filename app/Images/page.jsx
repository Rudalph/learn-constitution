"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Question_Bottom from '@/Components/Question_Bottom'
import Header_Of_Questions from '@/Components/Header_Of_Questions'


const Page = () => {
    const [correct, setCorrect] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center '>
            <Header_Of_Questions />
            <div className='flex justify-between align-middle flex-wrap'>
                <div className='lg:h-96 lg:w-[40%] flex justify-center align-middle  p-5 '>
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2020/11/Constitution-of-India-1024x576.png" alt="#" className=' object-cover rounded-lg' />
                </div>



                <div className='lg:p-10 w-[60%] items-end'>
                    <div className=' flex justify-center align-middle items-center  mt-10 text-[#3C3C3C] font-extrabold text-lg text-wrap lg:text-2xl'>
                        <p className=''>The question will be MCQ-based and will be asked on the Constitution of India, Part 4 (Union) and Part 5 (States)?</p>
                    </div>

                    <div className='flex justify-around gap-6 align-middle items-center mt-4 p-1'>
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

                    <div className='flex justify-around gap-6 align-middle items-center mt-2  p-1'>
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
            <div className={`hidden lg:fixed bottom-0 z-50 border-t-2 border-[#E5E5E5] w-full lg:flex justify-center align-middle items-center ${correct ? 'bg-[#D7FFB8]' : ''}`}>
              <Question_Bottom setCorrect={setCorrect}/>
            </div>
        </div>

    )
}

export default Page