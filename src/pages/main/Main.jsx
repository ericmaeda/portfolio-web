import React from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const Main = () => {
    return (
        <>
        <div className='ubuntu-medium py-5'>
            <Navbar/>
            <Header/>
            <Projects/>
            <Education/>
            <Contact/>
        </div>
        </>
    )
}

export default Main
