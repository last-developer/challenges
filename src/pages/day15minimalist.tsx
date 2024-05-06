import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const day15minimalist = () => {
    return (
        <>
            <div className='bg-[#101010] text-white h-screen'>

                {/* header */}
                <div className='fixed w-screen top-0 bg-[#101010]'>
                    <div className='items-center px-4 py-4 md:px-8 md:py-4 xl:px-10 text-white flex justify-between'>
                        <div className="logo text-gray-400 text-sm md:text-lg xl:text-xl">
                            <Link href={'/'}>
                                Et <span className='text-white'>leap</span>
                            </Link>
                        </div>
                        <div className='flex gap-2 justify-center items-center md:gap-4'>
                            <a href="#">Product</a>
                            <a href="#">Customers</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#" className='px-3 py-1 border rounded'>Login</a>
                        </div>
                    </div>
                    <hr className=" border-0 w-11/12 mx-auto" style={{ background: 'linear-gradient(to right, transparent, gray, transparent)', height: '.8px' }} />
                </div>

                {/* hero-section */}
                <div className='flex relative top-28 px-4 py-4 md:px-8 md:py-4 xl:px-10 '>
                    <div className='w-[45%]'>
                        <h1 className='text-7xl'>Perfect</h1>
                        <h1 className='text-7xl bg-[#f9b912]'>Data Pipelines</h1>
                        <p className='text-sm text-gray-500 mt-2'>Create perfect data pipelines and data warehouses with an analyst-friendly and maintenance-free ETL solution.</p>
                        <button className='mt-5 px-3 py-2 border rounded'>Request a Demo</button>
                    </div>
                    <Image className='w-[55%]' src={'/et.png'} width={400} height={400} alt='etleap image' />
                </div>
            </div>
        </>
    )
}









export default day15minimalist
