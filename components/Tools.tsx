
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Tools() {

const tools = [
    {
        image:"/tools/photoshop.png"
    },
    {
        image:"/tools/figma.png"
    },
    {
        image:"/tools/adobe.png"
    },
    {
        image:"/tools/pen.png"
    },


]

  return (
    <div className="py-4 md:py-8 px-4 md:px-12 overflow-hidden bg-background">
        <div className='max-w-5xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md-text-4xl font-langar'>Exploring the Tools</h2>
            <p className='text-sm text-secondary'> Behind My Designs</p>
        </div>
        {/* Tools */}
        <div >
            <div className='flex items-center justify-center gap-6'>
            {tools.map((item, index) => (
                <Image key={index}
                src={item.image}
                alt={item.image}
                width={60}
                height={60}
                className='hover:scale-110 transition-transform duration-300'
                />
            ))}
        </div>
        <div className='text-center mt-4'>
            <Link href="#" className='flex items-center justify-center space-x-2 text-primary hover:text-secondary transition-colors'>
            <span>See more</span>
            <span><ArrowUpRight className='w-6 h-6' />
           </span>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Tools