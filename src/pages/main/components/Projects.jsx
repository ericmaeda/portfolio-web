import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    return (
        <>
        <div id='Projects' className='flex flex-col w-full text-white'>
            <div className='w-full px-8 py-20 mt-5 m-auto'>
                <div className='flex justify-center'>
                    <div className='inline-block text-3xl border-2 backdrop-blur rounded-full p-5 px-10'>
                    My Projects
                    </div>
                </div>
            </div>
            <div id='project-boxes' className='2xl:grid 2xl:grid-cols-3 xl:grid-rows-1 gap-5 mx-auto max-w-7xl'>
                <div className='border-2 rounded-3xl backdrop-blur'>
                    <div className='p-10'>
                        <img src="/eric-site.png" alt="" className='mx-auto w-80 border-1 rounded-2xl'/>
                    </div>
                    <div className='flex flex-col text-center max-w-md'>
                        <div className='text-2xl'>Portfolio Website</div>
                        <div className='p-5'>My portfolio website. Contains my profile, projects, education, etc. Crafted with MERN stacks, decorated with TailwindCSS.</div>
                        <div className='flex flex-col'>
                            <div className='flex justify-center border-1 rounded-xl gap-5 items-center p-3 mx-auto'>
                                <img src="/mongo-db.png" alt="" className='w-5 h-15'/>
                                <img src="/expressjs-icon.svg" alt="" className='bg-white rounded-full p-2 w-12'/>
                                <img src="/react-2.svg" alt="" className='w-12'/>
                                <img src="/jsIconWhite.svg" alt="" className='w-12'/>
                                <img src="/tailwindcss.svg" alt="" className='w-12'/>
                            </div>
                            <br />
                            <div className='flex justify-center gap-24 items-center pb-6 mx-auto'>
                                <a href="" target='_blank' className='border-1 rounded-full p-3'>Demo</a>
                                <a href="" target='_blank' className='border-1 rounded-full p-3'>GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded-3xl backdrop-blur 2xl:mt-0 mt-5'>
                    <div className='p-10'>
                        <img src="/bem-chatting.png" alt="" className='mx-auto w-80 border-1 rounded-2xl'/>
                    </div>
                    <div className='flex flex-col text-center max-w-md'>
                        <div className='text-2xl'>BEM Chatting</div>
                        <div className='p-5'>A web based chatting platform to fulfill the recruiment task for Business and Partnership Bureau of BEM Fasilkom. Crafted with MERN stacks, my sleeping hours, and decorated with TailwindCSS.</div>
                        <div className='flex flex-col'>
                            <div className='flex justify-center border-1 rounded-xl gap-5 items-center p-3 mx-auto'>
                                <img src="/mongo-db.png" alt="" className='w-5 h-15'/>
                                <img src="/expressjs-icon.svg" alt="" className='bg-white rounded-full p-2 w-12'/>
                                <img src="/react-2.svg" alt="" className='w-12'/>
                                <img src="/jsIconWhite.svg" alt="" className='w-12'/>
                                <img src="/tailwindcss.svg" alt="" className='w-12'/>
                            </div>
                            <br />
                            <div className='flex justify-center gap-24 items-center pb-6 mx-auto text-gray-300'>
                                <div className='border-1 rounded-full p-3'>Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects
