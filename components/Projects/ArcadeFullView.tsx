

import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ArcadeFullView() {
  const images = [
    "/graphic design/A W 3 1.png",
    "/graphic design/acada new week 2 1.png",
    "/graphic design/Anjous flyer 1.png",
    "/graphic design/barm 2 1.png",
    "/graphic design/Barmsand 1.png",
    "/graphic design/BDA beauty 1.png",
    "/graphic design/Esim 1.png",
    "/graphic design/friday gadgets 1.png",
    "/graphic design/HAIR 1.png",
    "/graphic design/JEWE OLA 1.png",
    "/graphic design/jewerly 1 1.png",
    "/graphic design/KEMAT J 1.png",
    "/graphic design/launching soon 1.png",
    "/graphic design/Linguistic 1.png",
    "/graphic design/Lux design 1.png",
    "/graphic design/mide 1.png",
    "/graphic design/Mide cake 1.png",
    "/graphic design/MJ 1.png",
    "/graphic design/morocco 1.png",
    "/graphic design/moyosola store 1.png",
    "/graphic design/new week 1.png",
    "/graphic design/nw1 1.png",
    "/graphic design/odun work 1.png",
    "/graphic design/PAY 1.png",
    "/graphic design/PERFUMES M 1.png",
    "/graphic design/PHOCUS 1.png",
    "/graphic design/RAY FLYER 1.png",
    "/graphic design/Rayor 1.png",
    "/graphic design/ROLA 1.png",
    "/graphic design/school 1.png",
    "/graphic design/Skin Care 1.png",
    "/graphic design/zobo 1 1.png",
    "/graphic design/Zobo 1.png"
  ];

  const designType = [
    {
        title:'Logo Design',
        link:'/logo'
    },
    {
        title:'Brand Design',
        link:'/brand'
    },
    {
title: 'Hire Me',
link: '#'
    }
];

  return (
    <div className="py-4 md:py-10 px-4 md:px-12 bg-background">
        <div className='mb-6'>
           
            <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
       <div >
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary font-langar">Graphics Design</h2>
            <p className="text-secondary text-lg pt-5 font-lato">Bring ideas to life through captivating visuals that engage, motivate, and leave a lasting impression</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Graphic design ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
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
    </div>
  )
}

export default ArcadeFullView