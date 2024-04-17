import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-center text-xs sm:text-xl mb-2 mt-2'>
      <p><Link href={'/'} className=' bg-black text-white p-1 rounded'>Last Dev Challenges</Link></p>
    </div>
  )
}

export default Footer;
