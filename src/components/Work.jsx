import React from 'react'
import personalWebsite from '../assets/projects/personalWebsite.jpg'
import chess from '../assets/projects/chess.png'
import booksmart from '../assets/projects/booksmart.png'
import bindingofICS from '../assets/projects/bindingOfICS.png'
import MENT from '../assets/projects/MENT.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[#000000]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#CCFF01]'>Projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${personalWebsite})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',}}
            className='shadow-lg shadow-[#121212] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Personal Website
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/a-japundzic/portfolio-react-app" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${chess})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Chess in C++
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/a-japundzic/Chess" target="_blank" rel="noreferrer"> 
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${booksmart})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Book Database in Java
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/a-japundzic/BookSmart-Database" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${bindingofICS})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                2D Minigame in Java
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/a-japundzic/TheBindingOfICS" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${MENT})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                React Native and AWS App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/a-japundzic/MENT-Website" target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Work
