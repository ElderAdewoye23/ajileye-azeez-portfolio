

import { ArrowUpRight, ChevronLeft, Pointer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WebDesign() {

    const webDesigns = [
        {
            id: 1,
            image:'/FirstDesktopDesign/jewelry.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '/jewelryfullview'
        },
        {
            id: 2,
            image:'/FirstDesktopDesign/yogaa.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '/yogaa'
        },
        {
            id: 3,
            image:'/FirstDesktopDesign/opay.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '#'
        },
        {
            id: 4,
            image:'/FirstDesktopDesign/garden.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '/garden'
        }
    ]

    const designType = [
    {
        title:'Brand Design',
        link:'/brand'
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
    <div id='webDesign' className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
<div>
    <div>
             <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
    <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary font-langar">Web Design (UI/UX)</h2>
            
            <p className="text-secondary text-lg pt-5 font-lato">Crafting online experiences that balance beauty with usability from pixel perfect layouts to responsive designs, i create websites that feels as good as they look, engaging visitors. Designing seamless digital experiences that are intuitive engaging and user first.</p>
        </div>

<div className='max-w-7xl '>
    <div >
        {webDesigns.map((item) => (
            <div key={item.id} className='mx-auto mb-12 flex flex-col items-center'>
                <Image src={item.image} alt={item.text} width={800} height={500} className="rounded-lg shadow-lg" />
                <div className='mt-4'>
                    <button className='text-background bg-primary justify-center  w-fit px-6 py-2s rounded-md hover:bg-secondary hover:text-background transition-colors font-langar text-lg  '>
                   <Link href={item.link} className='flex items-center gap-3'>
                    <span>{item.text}</span>
                    <span>{item.icon}</span>
                   </Link>
                </button>
                </div>
            </div>
        ) )}
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

export default WebDesign