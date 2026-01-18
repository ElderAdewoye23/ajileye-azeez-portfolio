import { ChevronLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HireMe() {
  return (
    <div className="py-10 md:py-20 px-4 md:px-12 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
            <div className='mb-6'>
                <Link href="/#home" className='text-primary flex items-center gap-2 mt-4 hover:text-secondary transition-colors'>
                    <span> <ChevronLeft className='w-6 h-6'/></span>
                    <span>Back</span> 
                </Link>
            </div>
            
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl text-primary font-langar mb-6">Let &apos; s Work Together</h1>
                <p className="text-lg text-secondary font-lato leading-relaxed">
                    I help brands, organizations, and businesses turn ideas into polished, impactful solutions. 
                    With a strong eye for detail and a commitment to excellence, I deliver results that align with your vision and goals.
                </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl text-primary font-langar mb-4">Get In Touch</h2>
                <p className="text-secondary font-medium mb-6">
                    For official communication, payment, or more inquiries, please email the verified mail:
                </p>
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                    <Mail className="w-5 h-5" />
                    <span>Ajileyeazeez@yahoo.com</span>
                </div>
            </div>

            <div className="text-center">
                <a
  href="mailto:Ajileyeazeez@yahoo.com?subject=Project Inquiry"
  className="inline-block bg-primary text-background px-8 py-4 rounded-lg font-langar text-lg hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
>
  CONTACT AJILEYE AZEEZ AGBOOLA
</a>
                <p className="text-secondary mt-4">Thank you for considering my services!</p>
            </div>
        </div>
    </div>
  )
}

export default HireMe