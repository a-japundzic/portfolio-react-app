import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import C from '../assets/c.png';
import CPP from '../assets/c_plus_plus.png'

import AIX from '../assets/aix.png'
import ANSIBLE from '../assets/ansible.png'
import JAVA from '../assets/java.png'
import PYTHON from '../assets/python.png'
import READHAT from '../assets/redhat.png'
import SQL from '../assets/sql.png'
import TAILWIND from '../assets/tailwind.png'
import UBUNTU from '../assets/ubuntu.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#000000] text-white'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#CCFF01] '>Skills</p>
                <p className='font-caveat py-4 text-3xl text-[#E6E6E6]'></p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='py-1'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='py-1'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='py-1'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='py-1'>REACT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='pt-3 w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='py-1'>GITHUB</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                    <p className='py-1'>C</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt="HTML icon" />
                    <p className='py-1'>C++</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                    <p className='py-1'>AWS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='pt-10 w-20 mx-auto' src={AIX} alt="HTML icon" />
                    <p className='py-8'>AIX</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='pt-1.5 w-20 mx-auto' src={ANSIBLE} alt="HTML icon" />
                    <p className=''>ANSIBLE</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 pt-6 mx-auto' src={JAVA} alt="HTML icon" />
                    <p className='py-[28px]'>JAVA</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='pt-1.5 w-20 mx-auto' src={PYTHON} alt="HTML icon" />
                    <p className='py-2'>PYTHON</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 pt-3 mx-auto' src={READHAT} alt="HTML icon" />
                    <p className='py-2'>REDHAT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 pt-6 mx-auto' src={SQL} alt="HTML icon" />
                    <p className='py-[18px]'>SQL</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="HTML icon" />
                    <p>TAILWIND</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={UBUNTU} alt="HTML icon" />
                    <p className='py-0.5'>UBUNTU</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills
