

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Portfolio() {

 const portfolioItems = [
    {
        id:1,
        name: "Graphic Design",
        icon: <ArrowUpRight className='w-6 h-6' />,
        Link: "/arcade"
    },
    {
        id:2,
        name: "Logo Design",
        icon: <ArrowUpRight className='w-6 h-6' />,
        Link: "/logo"
    },
    {
        id:3,
        name: "Brand Design",
        icon: <ArrowUpRight className='w-6 h-6' />,
        Link: "/brand"
    
    },
    {
         id:4,
        name: "Web Design(Ui/Ux)",
        icon: <ArrowUpRight className='w-6 h-6' />,
        Link: "/web"
    },
    {
            id:5,
        name: "Mobile Ui/Ux",
        icon: <ArrowUpRight className='w-6 h-6' />,
        Link: "/mobile"
    }
]

  return (
    <div id="projects" className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary font-langar">My Portfolio</h2>
            
            <p className="text-secondary text-lg pt-5 font-lato">Step into my creative world, where imagination  runs wild, </p>
        </div>
        {/* Portfolio Links */}
        <div >
            <div className='flex flex-col gap-4 max-w-4xl text-center mx-auto justify-center items-center '>
                {portfolioItems.map((item) => (
                <button key={item.id} className='bg-primary text-background  p-2 rounded-md hover:bg-secondary hover:text-background transition-colors text-lg font-langar  w-full '>
                    <Link href={item.Link} className='flex items-center justify-center space-x-5 text-center'>
                    <span>{item.name}</span>
                    <span>{item.icon}</span>
                    </Link>

                </button>
            ) )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio