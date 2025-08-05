import React from 'react'

const Education = () => {
    return (
        <>
        <div id='educations' className='flex flex-col w-full mt-30 text-white'>
            <div id='education-title'className='inline-block border-2 mx-auto p-5 text-3xl rounded-full backdrop-blur'>
                Educations
            </div>
            <div id='education-box' className='lg:flex lg:flex-row flex flex-col mx-auto my-10'>
                <div id='high-school' className='border-2 p-10 backdrop-blur rounded-3xl h-[450px]'>
                    <img src="/edu/logo-smanssa.png" alt="" className='w-28 mx-auto bg-white rounded-xl'/>
                    <div className='text-2xl my-3'>
                        SMA Negeri 1 Salatiga
                    </div>
                    <div className=''>
                        Natural Science (MIPA)
                    </div>
                    <div>
                        2020 - 2023
                    </div>
                </div>
                <div id='univ' className='border-2 p-10 backdrop-blur rounded-3xl lg:my-0 my-5 lg:mx-5'>
                    <img src="/edu/logo-ui.svg" alt="" className='w-60 h-60 mx-auto' />
                    <div className='text-2xl my-3'>
                        Universitas Indonesia
                    </div>
                    <div className='mx-auto'>
                        Computer Science
                    </div>
                    <div>
                        2024 - Present
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education
