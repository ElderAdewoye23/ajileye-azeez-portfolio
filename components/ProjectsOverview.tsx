

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function ProjectsOverview() {

const projectView = [
    {
image:"/project/edu.png",
title:"Edulnvest NG APP",
btn:"See more",
link:"/eduinvest",
icon: <ArrowUpRight className='w-6 h-6' />
    },
    {
        image:"/project/yoga.png",
        title:"Yoga web design UI/UX",
        btn:"See more",
        link:"/yoga",
        icon: <ArrowUpRight className='w-6 h-6' />
    },
    {
        image:"/project/chair.png",
        title:"Acada Arcade Design",
        btn:"See more",
        link:"/arcade",
        icon: <ArrowUpRight className='w-6 h-6' />
    }
]

  return (
    <div  className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
        <div className='max-w-5xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md-text-4xl'>PROJECT FEATURES</h2>
            <p className='text-sm text-secondary'>A selection projects showcasing my creativity, strategy and results</p>
        </div>
        {/* Project Overview */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 py-5'>
            {projectView.map((item) => (
                <div key={item.title}>
                    <Image 
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className='rounded-lg w-[300px] h-[300px] object-cover'
                    />
                    <p className='text-center my-2'>{item.title}</p>
                    <button className=' bg-primary rounded-lg text-background w-full'>
                        <Link href={item.link} className='flex items-center p-2 justify-center space-x-2 text-center mt-2'>
                        <span className='text-md font-semibold'>{item.btn}</span>
                        <span>{item.icon}</span>
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsOverview