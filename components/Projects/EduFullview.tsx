
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EduFullview() {
  return (
    <div className="py-4 md:py-10 px-4 md:px-12 bg-background">
        <div>
           
            <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
        <div>
            <Image src="/mobile/eduinvest.png" alt="EduInvest Project" width={400} height={400} className="rounded-lg w-full h-auto object-cover" />
        </div>
    </div>
  )
}

export default EduFullview