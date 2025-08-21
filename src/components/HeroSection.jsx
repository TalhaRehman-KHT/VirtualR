import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
export default function HeroSection() {
    return (
        <>
            <div className='flex flex-col items-center mt-6 lg:mt-20'>
                <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                    VirtualR built tools
                    {" "}
                    <span className='bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text'> for developers </span>
                </h1>
                <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                    Empower your Creativity  and bring your VR app Ideas to life with our initiative development tools. Get started today and turn your imagintion into impressive reality
                </p>
                <div className='flex justify-center mt-10'>
                    <a href="#" className='bg-gradient-to-r from-orange-300 to-orange-500 py-3 px-4 mx-3 rounded-md text-2xl'>Start for free</a>
                    <a href="#" className=' py-4 px-4 mx-3 border rounded-md  '>Documentation</a>
                </div>
                <div className='flex justify-center mt-10'>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4'>
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4'>
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}
