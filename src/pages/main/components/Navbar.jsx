import React from 'react'

const Navbar = () => {
    return (
        <div id='navbar' className="flex justify-center items-center mt-8">
            <span className='inline-flex bg-blue-900/50 backdrop-blur-md gap-5 md:gap-7 p-4 rounded-full border-1 text-white'>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'>Me?</a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'>Projects</a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'>Educations</a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'>Contacts</a>
                <a href="#" className='px-4 cursor-pointer hover:text-gray-400 transition duration-200'>Blog</a>
            </span>
        </div>
    )
}

export default Navbar
