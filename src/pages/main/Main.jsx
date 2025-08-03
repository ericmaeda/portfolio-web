import React from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const Main = () => {
    return (
        <>
        <div className='ubuntu-medium flex flex-col py-5 border-2'>
            <div id='navbar' className='fixed top-8 w-full flex justify-center z-50'>
                <Navbar/>
            </div>
            <div id='header' className='pt-32'>
                <Header/>
            </div>   
            <div id='projects' className='pt-32'>
                <Projects/>
            </div>        
            <div id='education'>
                <Education/>
            </div>
            <div id='contacts'>
                <Contact/>
            </div>
        </div>
        </>
    )
}

export default Main
