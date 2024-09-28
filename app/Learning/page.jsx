"use client"
import React from 'react'
import Image from 'next/image'
import HomeButton from '@/Components/homeButton';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { RiVideoFill } from "react-icons/ri";

const page = () => {

    const handleAudioClick = async () => {
        // Extract the text from the div
        const textToConvert = `
            Article 52: The President of India
            Establishment of the Office of the President
            Article 52 simply states that India shall have a President. 
            The President is the head of the Union executive, meaning they hold the highest office in the country.

            Role and Significance
            The President acts as the ceremonial head of the country, symbolising the unity of the nation. 
            Though much of the power lies with the Prime Minister and the Council of Ministers, 
            the President's role is crucial in formalising decisions, laws, and appointments.

            Example
            When a law is passed by Parliament, the President must give assent for it to become official law. 
            Though this is a formal process, it ensures checks and balances.

            Election
            The President is elected, not directly by the people, but by an Electoral College comprising elected members of both 
            Houses of Parliament and Legislative Assemblies of the States (including Union Territories like Delhi).

            In short, Article 52 establishes the President as the formal head of state in India.
        `;

        // ElevenLabs API call
        const url = "https://api.elevenlabs.io/v1/text-to-speech/pMsXgVXv3BLzUgSXRplE";
        const headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": "sk_b997b029fd7e97a483b054b9fff5808de21ec6664eb3932e" // Replace with your actual API key
        };
        const data = {
            text: textToConvert,
            model_id: "eleven_monolingual_v1",
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.5
            }
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const blob = await response.blob();
                const audioUrl = URL.createObjectURL(blob);
                const audio = new Audio(audioUrl);
                audio.play();  // Play the audio
            } else {
                console.error("Error in API call:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div>
            <HomeButton/>
            <div className='flex justify-center align-middle items-center my-10  xl:pl-20'>
                
                <div className='w-[80%]'>
                    <div className="flex justify-center text-3xl font-bold mb-2">Let&apos;s Learn Constituiton </div>
                    <div className="flex justify-center text-lg font-semibold mb-6">Get to know the articles of Indian consitituition</div>
                    <div className="flex card border-2 shadow-[0_5px_0_#E5E5E5] border-[#E5E5E5] cursor-pointer ">
                        <div className="card-body p-8">
                            <h2 className="card-title text-lg text-[#4B4B4B] font-extrabold">Article 52: The President of India</h2>
                            <div className='gap-5'>
                                <h1 className=" font-bold mb-4">Establishment of the Office of the President</h1>
                                <p className=" mb-4">Article 52 simply states that India shall have a President. The President is the head of the Union executive, meaning they hold the highest office in the country.</p>

                                <h2 className=" font-semibold mt-6 mb-2">Role and Significance</h2>
                                <p className=" mb-4">The President acts as the ceremonial head of the country, symbolising the unity of the nation. Though much of the power lies with the Prime Minister and the Council of Ministers, the President's role is crucial in formalising decisions, laws, and appointments.</p>

                                <h3 className=" font-semibold mt-6 mb-2">Example</h3>
                                <p className=" mb-4">When a law is passed by Parliament, the President must give assent for it to become official law. Though this is a formal process, it ensures checks and balances.</p>

                                <h2 className=" font-semibold mt-6 mb-2">Election</h2>
                                <p className=" mb-4">The President is elected, not directly by the people, but by an Electoral College comprising elected members of both Houses of Parliament and Legislative Assemblies of the States (including Union Territories like Delhi).</p>

                                <p className=" mt-6">In short, Article 52 establishes the President as the formal head of state in India.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-[20%] flex flex-col items-center'>
                    <div className="card bg-[#58CC02] shadow-[0_5px_0_#61B800]  cursor-pointer  lg:w-40 lg:h-30 m-5">
                        <div className="card-body p-2">
                            <div className='flex justify-center gap-5 text-6xl text-white'>
                                <HiMiniSpeakerWave  onClick={handleAudioClick} />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-[#1CB0F6] shadow-[0_5px_0_#1AA8EB]  cursor-pointer ] lg:w-40 lg:h-30 m-5">
                        <div className="card-body p-2">
                            <div className='flex justify-center gap-5 text-6xl text-white'>
                                <RiVideoFill onClick={() => document.getElementById('my_modal_2').showModal()} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Article 52: The President of India</h3>
                    <p className="py-4"> <video width="1200" height="720" controls>
                        <source src="/article52.mp4" type="video/mp4" />
                    </video></p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default page