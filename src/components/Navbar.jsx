import React, {useEffect, useState} from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Hamburger from 'hamburger-react'

import Pdf from '../resume/Andreja_Japundzic_Resume.pdf'

import Logo from '../assets/logo2.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav);
        setOpen(!isOpen)
        document.body.classList.toggle("overflow-hidden");
    };
    const [isOpen, setOpen] = useState(false)

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (window.scrollY > 250) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
  
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      // cleanup function
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);

  return (
    <div className={`fixed w-full h-[80px] flex justifty-between items-center px-4 bg-[##000000] text-[#CCFF01]`}>
        <div className={`logo-width:flex active ${!show && 'hidden'}`}>
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

        {/* menu */}
        <ul className='hidden nav-width:flex ml-auto'>
            <li>
                <Link
                    to="home" 
                    smooth={true} 
                    duration={500} 
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    to="timeline" 
                    smooth={true} 
                    duration={500} 
                >
                    Timeline
                </Link>
            </li>
            <li>
                <Link 
                    to="work" 
                    smooth={true} 
                    duration={500} 
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500} 
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                >
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='nav-width:hidden ml-auto z-10'>
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link
                    onClick={handleClick}
                    to="home" 
                    smooth={true} 
                    duration={500} 
                >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                    onClick={handleClick}
                    to="about" 
                    smooth={true} 
                    duration={500} 
                >
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                    onClick={handleClick}
                    to="timeline" 
                    smooth={true} 
                    duration={500} 
                >
                    Timeline
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                    onClick={handleClick}
                    to="work" 
                    smooth={true} 
                    duration={500} 
                >
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                    onClick={handleClick}
                    to="skills" 
                    smooth={true} 
                    duration={500} 
                >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                    onClick={handleClick}
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                >
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
         <div className='flex fixed flex-col top-[35%] left-0 text-white'>
            <ul>
                <li className='w-[80px] logo-width:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/a-japundzic/" target='_blank' rel="noreferrer">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[80px] logo-width:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-white' href="https://github.com/a-japundzic" target='_blank' rel="noreferrer">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[80px] logo-width:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-white' href="mailto:japu1350@mylaurier.ca" rel="noreferrer">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[80px] logo-width:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='mr-[-10px] lg:mr-0 duration-300 flex justify-between items-center w-full text-white' href = {Pdf} target = "_blank" rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar
