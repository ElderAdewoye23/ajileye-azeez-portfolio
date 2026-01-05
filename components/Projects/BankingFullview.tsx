
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BankingFullview() {
  return (
     <div>
        <div>
            <div>
             <Link href="/mobile" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
        <div className='px-5 mt-6'>
                    <Image  src="/mobileview/bankingfull.png" alt="Banking Project" width={400} height={400} className="rounded-lg w-full h-auto object-cover" />
                </div>
        </div>
    </div>
  )
}

export default BankingFullview