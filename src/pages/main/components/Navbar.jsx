import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faGraduationCap, faAddressBook, faPenNib } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div id='navbar' className="sm:flex sm:justify-center sm:items-center sm:mt-8">
            <span className='inline-flex bg-blue-900/50 backdrop-blur-md md:gap-7 p-4 rounded-full border-1 text-white text-2xl'>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faUser }/></a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faCode }/></a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faGraduationCap }/></a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'><FontAwesomeIcon icon={ faPenNib }/></a>
            </span>
        </div>
    )
}

export default Navbar
