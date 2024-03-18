import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name='home' className='bg-[#000000] w-full h-screen items-center'>
        {/* Container */}
        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <h1 className='text-3xl text-[#CCFF01] text-center'>
                Hi, my name is
            </h1>
            <h1 className='font-caveat text-4xl py-3 sm:text-8xl font-bold text-[#ffffff] text-center'>
                <Typewriter
                    options={{
                        autoStart: true,
                        delay: 130,
                        cursor: "",
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Andreja Japundzic')
                            .start()
                    }}
                />
            </h1>
            {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#E6E6E6]'>
                I'm a Developer and a Student.
            </h2> */}
            {/* <p className='text-[#E6E6E6] py-4 max-w-[700px]'> 
                I’m a full-stack developer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on
                building responsive full-stack web applications.
            </p>  */}

            <div className='py-3'> 
                <Link 
                    to="about" 
                    smooth={true} 
                    duration={700} 
                >
                    <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:text-black hover:bg-[#CCFF01] hover:border-[#CCFF01] duration-300'>
                        Explore
                        <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/> 
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
