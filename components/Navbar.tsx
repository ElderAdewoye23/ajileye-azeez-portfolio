
import React from 'react'
import {ArrowUpRight  } from 'lucide-react';
import NavIcons from './NavIcons';
import Link from 'next/link';




function Navbar() {



  return (
    <nav className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-b-border">

    {/* first */}
    <div className='flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0'>
        <h2 className='font-semibold text-center md:text-left'>Find me: Agboola Visual Designer</h2>

    {/* Icons */}
   <NavIcons />
    </div>
    {/* second section */}
    <p className=' bg-primary text-background px-4 py-2 mt-4 md:mt-0 cursor-pointer hover:bg-secondary w-full md:w-max justify-center'>
       <Link href="/resume" className='flex items-center space-x-2'>
        <span>View my CV</span>
     <span> <ArrowUpRight className='w-4 h-4' /></span>
       </Link>
     </p>

    </nav>
  )
}

export default Navbar