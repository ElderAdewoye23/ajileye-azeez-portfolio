import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Resume() {
  return (
     <div className="py-4 md:py-10 px-4 md:px-12  bg-background">
            <div className='mb-6'>
               
                <Link href="/" className='text-primary flex items-center gap-2 mt-4'>
                <span> <ChevronLeft className='w-6 h-6'/></span>
                <span>Back</span> 
                </Link>
            </div>
            <div>
                <Image src="/imageandcv/resume.png" alt="Yoga Project" width={400} height={400} className="rounded-lg w-full h-auto object-cover" />
            </div>
        </div>
  )
}

export default Resume