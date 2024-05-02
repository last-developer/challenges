import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const day10minimalist = () => {
    return (
        <div className=' mb-10'>
            <div className=' flex mt-8 gap-5 px-8'>
                <div className="w-[35%]">
                    <h2 className='text-7xl font-medium'>Fast,</h2>
                    <h2 className='text-7xl font-medium'>Nationwide</h2>
                    <h2 className='text-7xl font-medium'>Permitting</h2>
                    <p className='mt-3 text-sm text-gray-700'>-for developers, builders, contractors...</p>
                    <button className='group py-2 text-sm bg-black text-white my-1 mb-2 px-2 rounded flex items-center '>
                        Talk to an Expert
                        <ArrowRightIcon className='ml-1 transition-transform duration-300 group-hover:translate-x-1' />
                    </button>
                    <Image height={5033} width={7546} src={'/b1.jpg'} alt='group work image' className=' h-[13rem] w-[25rem] object-cover'></Image>
                </div>
                <div className=" w-[65%]">
                    <p className=' text-sm'>
                        At PermitFlow, we streamline the entire permitting process to make it fast and hassle-free, especially for developers, builders, and contractors. Leveraging our cutting-edge platform, we simplify the submission, tracking, and management of permits across all municipalities. Our technology ensures that your projects proceed without delays, enhancing efficiency and reducing downtime.
                    </p>
                    <hr className='my-3 bg-gray-700 h-[1px]' />
                    <Image height={1944} width={2592} className='cover object-cover w-full h-[25rem]' src={'/b2.jpg'} alt='building image'></Image>
                </div>
            </div>

            <p className='my-10 px-8 text-red-500'>*Note- This component is not responsive, so watch it on desktop screen only.</p>

            <div className='p-8 flex mt-8 gap-5 bg-[#0f0f0f] text-white'>
                <div className="w-[35%]">
                    <h2 className='text-7xl font-medium'>Fast,</h2>
                    <h2 className='text-7xl font-medium'>Nationwide</h2>
                    <h2 className='text-7xl font-medium'>Permitting</h2>
                    <p className='mt-3 text-sm text-[gray]'>-for developers, builders, contractors...</p>
                    <button className='group py-2 text-sm bg-white text-black font-medium my-1 mb-2 px-2 rounded flex items-center '>
                        Talk to an Expert
                        <ArrowRightIcon className='ml-1 transition-transform duration-300 group-hover:translate-x-1' />
                    </button>
                    <Image height={5033} width={7546} src={'/b1.jpg'} alt='group work image' className=' h-[13rem] w-[25rem] object-cover'></Image>
                </div>
                <div className=" w-[65%]">
                    <p className=' text-sm text-[gray]'>
                        At PermitFlow, we streamline the entire permitting process to make it fast and hassle-free, especially for developers, builders, and contractors. Leveraging our cutting-edge platform, we simplify the submission, tracking, and management of permits across all municipalities. Our technology ensures that your projects proceed without delays, enhancing efficiency and reducing downtime.
                    </p>
                    <hr className='my-3 bg-[gray] h-[1px]' />
                    <Image height={1944} width={2592} className='cover object-cover w-full h-[25rem]' src={'/b2.jpg'} alt='building image'></Image>
                </div>
            </div>
        </div>


    )
}

export default day10minimalist
