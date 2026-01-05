
import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function HeroButtons() {

const buttons = [
    {
        text: "About Me",
        link: "/about",
        style: "primary",
        icon: <ArrowUpRight className='w-4 h-4' />
    },
    {
        text:"Hire Me",
        link:"/hire",
        style:"primary",
         icon: <ArrowUpRight className='w-4 h-4' />
    },
    {
        text:"View My Portfolio",
        link:"/#projects",
        
        icon: <ArrowUpRight className='w-4 h-4' />
    }
]

  return (
    <div>
        {buttons.map((button) => (
            <button key={button.text} className={` ${button.style === "primary" ? 'bg-primary text-background' : ' text-primary'} pr-3 m-1 px-4 py-2  rounded hover:bg-secondary hover:text-background transition-colors `}>
               <Link href={button.link} className='flex gap-2'>
               <span>{button.text}</span>
                <span>{button.icon}</span></Link>
            </button>
        ))}
    </div>
  )
}

export default HeroButtons