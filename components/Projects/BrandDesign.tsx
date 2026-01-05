

import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BrandDesign() {

const designType = [
    {
        title:'Logo Design',
        link:'/logo'
    },
    {
        title:'Mobile  ui/ux',
        link:'/mobile'
    },
    {
title: 'Hire Me',
link: '#'
    }
];


  return (
    <div className="py-4 md:py-10 px-4 md:px-12 bg-background">
          <div className='mb-4'>
           
            <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
        <div className='max-w-5xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md:text-4xl'>Brand Design</h2>
            <p className='text-sm text-secondary'>Transforming ideas into bold visuals that define identity and spark connection</p>
        </div>
        {/* Logo Design */}
        <div className='mb-4'>
                    <Image src="/brand design/brand.png" alt="EduInvest Project" width={400} height={400} className="rounded-lg w-full h-auto object-cover" />
                </div>
                <div className="text-center mt-8">
            {designType.map((type, index) => (
                <button key={index} className="bg-primary text-background p-2 m-2 rounded-md hover:bg-secondary hover:text-background transition-colors text-lg font-langar">
                    <Link href={type.link} className='flex items-center justify-center space-x-2 text-center '> 
                    <span>{type.title}</span>
                    <span><ArrowUpRight className='w-6 h-6' />
                  </span>
                    </Link>
                </button>
                   
                
            ) )}
        </div>
    </div>
  )
}

export default BrandDesign