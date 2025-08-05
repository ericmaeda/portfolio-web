import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faGraduationCap, faAddressBook, faPenNib } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const navbarControl = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false) // Scroll downward
            }
            else {
                setShowNavbar(true) // Scroll up upward
            }
            
            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', navbarControl)
            return () => {
                window.removeEventListener('scroll', navbarControl)
            }
        }
    }, [lastScrollY])

    return (
        <div className={`z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
            <div id='navbar' className="sm:flex sm:justify-center sm:items-center sm:mt-8">
                <span className='inline-flex bg-blue-900/50 backdrop-blur-md md:gap-7 p-4 rounded-full border-1 text-white text-2xl'>
                    <a href="#landing-page" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faUser }/></a>
                    <a href="#projects" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faCode }/></a>
                    <a href="#educations" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faGraduationCap }/></a>
                    <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faPenNib }/></a>
                </span>
            </div>
        </div>
        
    )
}

export default Navbar
