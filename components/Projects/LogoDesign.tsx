

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';

function LogoDesign() {
  const logos = [
    "/logo design/Asset 10 1.png",
    "/logo design/Asset 15@3x-100 1.png",
    "/logo design/Asset 17 2.png",
    "/logo design/Asset 1@2x 1.png",
    "/logo design/Asset 2@2x 1.png",
    "/logo design/Asset 3@2x 1.png",
    "/logo design/Asset 4 2.png",
    "/logo design/Asset 7 1.png",
    "/logo design/Asset 7 2.png",
    "/logo design/Component 102.png",
    "/logo design/Component 103.png",
    "/logo design/Component 104.png",
    "/logo design/Component 105.png",
    "/logo design/Component 106.png",
    "/logo design/Frame 637307.png",
    "/logo design/WhatsApp Image 2025-12-24 at 3.48.57 PM 1.png"
  ];

  const designType = [
    {
        title:'Graphic Design',
        link:'/arcade'
    },
    {
        title:'Web Design (ui/ux)',
        link:'/web'
    },
    {
title: 'Hire Me',
link: '/hire'
    }
];

  return (
    <div className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
        <div>
             <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
        <div className='max-w-5xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md:text-4xl'>Logo Design</h2>
            <p className='text-sm text-secondary'>Crafting symbols that define brands and stand the test of time. A great logo
 is more than just a mark</p>
        </div>
        {/* Logo Design */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0 min-w-full">
              {logos.map((src, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0 min-w-full">
              {logos.map((src, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
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

export default LogoDesign