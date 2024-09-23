import React,{useState} from 'react'
import Image from 'next/image'
import { MdBugReport } from "react-icons/md";

const Question_Bottom = ({setCorrect}) => {

    const [changes, setChanges] = useState(true)
    const check = (e) =>{
        setCorrect(true);
        setChanges(false);
    }

    return (
        <div>

            <div className='flex justify-between lg:w-[900px] flex-wrap gap-5 pt-8 pb-8 h-32'>
                {changes ? <button className="btn w-40 rounded-2xl bg-[white] text-[#9D9D9D] border border-[#9D9D9D] font-extrabold text-lg shadow-[0_5px_0_#9D9D9D] hover:bg-[#E5E5E5]">SKIP</button> :
                  <div className='flex justify-center align-middle items-center gap-5'>
                    <Image src="/tick.png" height={60} width={60} className='p-2 bg-white rounded-full animate-bounce'/>
                    <div>
                        <p className='text-xl font-extrabold text-[#58A700]'>Great, you are correct!</p>
                        <br />
                       <button className='flex justify-start align-middle items-center gap-2'>
                          <MdBugReport size={25} className='text-[#58A700]'/>
                          <p className='flex text-base font-extrabold text-[#61B800]'> Report</p>
                       </button>
                    </div>
                    
                  </div>
                }
                
                <button className="btn w-40 rounded-2xl bg-[#58CC02] text-white font-extrabold border-[#58CC02] text-lg shadow-[0_5px_0_#3FA001] hover:bg-[#61E002]" onClick={check}>{changes ? 'CHECK' : 'CONTINUE'}</button>
            </div>

        </div>
    )
}

export default Question_Bottom