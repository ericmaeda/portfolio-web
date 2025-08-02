import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
        <div class='flex justify-between'>
            <div className='flex flex-col max-w-2xl absolute top-3/9 left-1/11 p-10 text-white backdrop-blur border-2 rounded-3xl'>
                <h1 className='text-6xl'>I'm Erico Mahendra</h1>
                <br />
                <p>A highly motivated software engineer. Fueled by curiosity, driven by clean architecture, and obsessed with making things that scale. Currently exploring the art of backend systems, cloud infrastructure, and everything in between.</p>
            </div>
            <div className='flex flex-col absolute top-3/15 right-1/9 p-10 border-2 text-white backdrop-blur rounded-3xl'>
                <div className='flex justify-center '>
                    <img src="/eric.png" alt="" className='w-70 h-70 rounded-full'/>
                </div>
                <div className='flex justify-center text-5xl py-4'>
                    <a href="https://github.com/ericmaeda" target="_blank">
                        <FontAwesomeIcon icon={ faGithub }/>
                    </a>
                    <a href="https://linkedin.com/in/ericmaeda27" target="_blank">
                        <FontAwesomeIcon icon={ faLinkedin }/>
                    </a>
                    <a href="mailto:ericopbm@gmail.com">
                        <FontAwesomeIcon icon={ faEnvelope }/>
                    </a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header
