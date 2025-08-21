import React from 'react'
import codeImg from '../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants/index.jsx'

export default function WorkFlow() {
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                    Accelerate Your
                    {" "}
                    <span className='bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text'> Work Code </span>
                </h1>
                <div className='flex flex-wrap justify-center '>
                    <div className='p-2 w-full lg:w-1/2'>
                        <img src={codeImg} alt="" />
                    </div>
                    <div className='pt-12 w-full lg:w-1/2'>
                        {checklistItems.map((item, index) => (
                            <div className='flex mb-12' key={index} >
                                <div className='text-green-400 bg-neutral-900 h-10 p-2  justify-center rounded-full items-center'>
                                    <CheckCircle2 />
                                </div>
                                <div className='mx-3'>
                                    <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                                    <p className='text-md text-neutral-500'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
