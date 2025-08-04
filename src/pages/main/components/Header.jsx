import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
        <div class='lg:flex lg:justify-between md:flex md:flex-col md:mt-0 mx-auto'>
            <div className='md:flex md:flex-col xl:max-w-2xl lg:max-w-md md:max-w-3/5 max-w-4/5 xl:mx-35 lg:mx-20 xl:my-12 lg:my-auto md:mx-auto mx-auto mt-10 xl:p-10 lg:p-10 md:p-12 p-10
             text-white backdrop-blur border-2 rounded-3xl'>
                <h1 className='md:text-2xl'>Good Morning!</h1>
                <br />
                <h1 className='md:text-6xl text-3xl'>I'm Erico Mahendra</h1>
                <br />
                <p>A highly motivated software engineer. Fueled by curiosity, driven by clean architecture, and obsessed with making things that scale. Currently exploring the art of backend systems, cloud infrastructure, and everything in between.</p>
                <br />
                <div className='w-full'>
                    <a href="" className='inline-block text-white rounded-full p-3 px-6 hover:text-blue-900 transition duration-300' style={{ backgroundImage: 'linear-gradient(to right, #f00, #00f)' }}>Download CV</a>
                </div>
            </div>
            <div className='lg:flex lg:flex-col lg:absolute xl:top-3/15 lg:top-3/13 xl:right-1/9 lg:right-1/9 lg:mx-0 lg:mt-5 lg:my-0 md:mx-auto mx-auto md:my-12 mt-12 xl:p-10 lg:p-6 md:max-w-1/2 max-w-2xs border-2 text-white backdrop-blur rounded-3xl'>
                <div className='lg:flex lg:justify-center md:flex md:justify-center lg:p-0 md:p-10'>
                    <img src="/eric.png" alt="eric-pic" className='lg:w-70 lg:h-70 md:w-60 md:h-60 w-45 h-45 md:mx-0 mx-13 md:my-0 my-7 rounded-full'/>
                </div>
                <div className='flex justify-center text-5xl py-4'>
                    <a href="https://github.com/ericmaeda" target="_blank" className='cursor-pointer hover:text-gray-300 transition duration-200'>
                        <FontAwesomeIcon icon={ faGithub }/>
                    </a>
                    <a href="https://linkedin.com/in/ericmaeda27" target="_blank" className='cursor-pointer hover:text-gray-300 transition duration-200'>
                        <FontAwesomeIcon icon={ faLinkedin }/>
                    </a>
                    <a href="mailto:ericopbm@gmail.com" className='cursor-pointer hover:text-gray-300 transition duration-200'>
                        <FontAwesomeIcon icon={ faEnvelope }/>
                    </a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header
