import React from 'react'

import {BsFillPersonLinesFill} from 'react-icons/bs'
import Pdf from '../resume/Andreja_Japundzic_Resume.pdf'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#CCFF01] '>About</p>
            </div>
            <div className='py-4 max-w-[1000px] w-full grid sm:text-justify sm:grid-cols-2 gap-12'>
                <div className=' text-[#E6E6E6] text-sm/6'>
                    <p> I am a fourth-year computer science student at the University of Waterloo and a fourth-year business administration 
                        student at Wilfrid Laurier University. As such, I have extensive knowledge pertaining to software, hardware, and business. 
                        Above that, I label myself as a lifelong learner, as I am always looking to grow my knowledge through school, work, 
                        or personal projects. This website is my most recent personal project, which I created to learn React. 
                        Feel free to go through it for an in-depth view of who I am and what I bring to the table. 
            
                    </p>
                </div>
                <div className='sm:text-justify text-white'> 
                    <h2 className='font-caveat text-2xl/6'>  
                        “There is no end to education. It is not that you read a book, pass an examination, 
                        and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.” 
                        <br></br>
                        <br></br>
                        — Jiddu Krishnamurti
                    </h2>
                </div>
            </div>

            <div className='py-7 grid-cols-2 grid sm:text-justify justify-items-center'>
                <a href = {Pdf} target = "_blank" rel="noreferrer">
                    <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:text-black hover:bg-[#CCFF01] hover:border-[#CCFF01] duration-300'>
                        Resume
                        <BsFillPersonLinesFill className='ml-3'/> 
                    </button>
                </a>
            </div>


        </div>
    </div>
  )
}
