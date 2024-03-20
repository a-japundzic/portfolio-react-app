import React from 'react'

import { Chrono } from 'react-chrono'

import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Timeline = () => {
    
    const items = [
        {
            title: "September 2021",
            cardTitle: "Started University",
            cardDetailedText: "I began my first year of University as a student of business administration at Wilfrid Laurier University and a student of computer science at the University of Waterloo. This specialized double degree program allows me to have a unique perspective on both the business and developer worlds.",
        },
        {
            title: "January-April 2023",
            cardTitle: "First Co-op Term",
            cardDetailedText: "I completed my first co-op term as a software developer and site reliability engineer at RBC. Here I learned essential skills such as Ansible, Selenium API, and various Linux distributions.",
        },
        {
            title: "January-April 2024",
            cardTitle: "Second Co-op Term",
            cardDetailedText: "I completed my second co-op as a systems administrator at IBM. Here I built on the foundation of skills and tools I learned to use at RBC through continued use of Ansible and various Linux distributions. Additionally, I learned new skills, such as how to use Jira to solve production issues. Finally, I got the opportunity to participate in a Swift Audit, which gave me valuable insights on the infrastructure of high-security systems. ",
        },
        {
            title: "September-December 2024",
            cardTitle: "Exchange",
            cardDetailedText: "I will be going on exchange to the NHH Norwegian School of Economics in Bergen, Norway. NHH is one of the leading business schools in Europe, where I will have the opportunity to grow my business skills. Additionally, the ability to experience several different cultures will help me gain unique perspectives and assist in my overall growth as an individual. ",
        },
        {
            title: "January-April 2025",
            cardTitle: "Third Co-op Term",
            cardDetailedText: "This will be my third co-op term and the one I am currently applying to jobs for. I am hoping to bring my unique perspectives and skills to assist the company in pursuing its objectives. I also hope to continue my learning and building my skill set through my role at the company. ",
        },
        {
            title: "September-December 2025",
            cardTitle: "Fourth Co-op Term",
            cardDetailedText: "This will be my final co-op term, where I will focus on continuing my learning and expanding my skill set. ",
        },
        {
            title: "August 2026",
            cardTitle: "Graduation",
            cardDetailedText: "After I complete my final school term in the summer, I will officially graduate the double degree program. This will be the start of a new learning journey for me as I continue to build off the foundation gained from my program and I continue my learning at a new job role or higher education. As stated above, there is no end to education. ",
        },
    ];


    return (
        <div name='timeline' className='bg-[#000000] w-full h-screen items-center text-white '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-5'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#CCFF01] '>Personal Timeline</p>
                </div>

                <Chrono 
                    theme={{
                        primary: '#CCFF01',
                        secondary: '#00000',
                        cardBgColor: '#191919',
                        titleColor: '#CCFF01',
                        titleColorActive: '#CCFF01',
                        cardTitleColor: '#CCFF01',
                        cardDetailsColor: '#E6E6E6',
                    }} 

                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1.2rem',
                        title: '1.5rem',
                    }}
                
                    items={items} mode="VERTICAL_ALTERNATING" disableToolbar cardHeight={255} />

                <div className='flex justify-center items-center pt-[75px]'> 
                    <Link 
                        to="work" 
                        smooth={true} 
                        duration={700} 
                    >
                        <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:text-black hover:bg-[#CCFF01] hover:border-[#CCFF01] duration-300'>
                            Projects
                            <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/> 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Timeline
