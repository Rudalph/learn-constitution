"use client"
import React,{use, useState} from 'react'
import Image from 'next/image'
import Question_Bottom from '@/Components/Question_Bottom'


const Page = () => {
    const [correct, setCorrect] = useState(false);

    const [answerSelected, setAnswerSelected] = useState('');
    const [bgColor, setBgColor] = useState({
        option1:false,
        option2:false,
        option3:false,
        option4:false
    });

    const handleSelect = (option: String) => {
        var selectedOption = document.getElementById('selectedOption')?.textContent;
        selectedOption ? setAnswerSelected(selectedOption) : setAnswerSelected('');
        setBgColor((prevState) => ({
            ...prevState,
            option1: option === 'option1',
            option2: option === 'option2',
            option3: option === 'option3',
            option4: option === 'option4',
        }));
        console.log(answerSelected)
    }

    return (
        <div className='flex flex-col justify-center items-center '>
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

            <div className='lg:w-[900px] flex justify-center items-center mt-10 text-[#3C3C3C] font-extrabold text-lg text-wrap lg:text-2xl'>
                <p className='text-center'>The question will be MCQ-based and will be asked on the Constitution of India, Part 4 (Union) and Part 5 (States)?</p>
            </div>

            <div className='flex justify-around gap-6 align-middle items-center mt-8 lg:mt-24 flex-wrap p-1'>
                
                <div className={`card border-2 shadow-[0_5px_0_#E5E5E5] border-[#E5E5E5] lg:w-96 ${bgColor.option1 ? 'bg-[#DDF4FF] shadow-[0_5px_0_#84D8FF] border-[#84D8FF]' : ''}`} onClick={()=>handleSelect('option1')} >
                    <div className="card-body p-2">
                        <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                        <div className='flex justify-between gap-5'>
                            <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                1
                            </div>
                            <p id="selectedOption" className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                        </div>
                    </div>
                </div>

                <div className={`card border-2 shadow-[0_5px_0_#E5E5E5] border-[#E5E5E5] lg:w-96 ${bgColor.option2 ? 'bg-[#DDF4FF] shadow-[0_5px_0_#84D8FF] border-[#84D8FF]' : ''}`} onClick={()=>handleSelect('option2')}>
                    <div className="card-body p-2">
                        <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold"></h2>
                        <div className='flex justify-between gap-5'>
                            <div className="flex justify-center items-center w-[35px] h-[35px] border border-gray-300 rounded-md text-gray-500 text-sm font-extrabold">
                                2
                            </div>
                            <p id="selectedOption" className='flex justify-center align-middle items-center text-[#777777] font-bold'>Complete 9 more lessons to start competing</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around gap-6 align-middle items-center mt-7 flex-wrap p-1'>
                <div className={`card border-2 shadow-[0_5px_0_#E5E5E5] border-[#E5E5E5] lg:w-96 ${bgColor.option3 ? 'bg-[#DDF4FF] shadow-[0_5px_0_#84D8FF] border-[#84D8FF]' : ''}`} onClick={()=>handleSelect('option3')}>
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

                <div className={`card border-2 shadow-[0_5px_0_#E5E5E5] border-[#E5E5E5] lg:w-96 ${bgColor.option4 ? 'bg-[#DDF4FF] shadow-[0_5px_0_#84D8FF] border-[#84D8FF]' : ''}`} onClick={()=>handleSelect('option4')}>
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

            

            <div className={`hidden lg:fixed bottom-0 z-50 border-t-2 border-[#E5E5E5] w-full lg:flex justify-center align-middle items-center ${correct ? 'bg-[#D7FFB8]' : ''}`}>
              <Question_Bottom setCorrect={setCorrect}/>
            </div>
        </div>

    )
}

export default Page