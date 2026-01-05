
import { ArrowUpRight, ChevronLeft, Pointer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileDesign() {

const mobileDesigns = [
        {
            id: 1,
            image:'/mobile/eduinvestt.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '/edufullview'
        },
        {
            id: 2,
            image:'/mobile/banking.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '/banking'
        },
        {
            id: 3,
            image:'/mobile/home.png',
            icon: <Pointer className='w-4 h-4'/>,
            text: 'Expand to see more ',
            link: '#'
        },
        
    ];

    
        const designType = [
        {
            title:'Graphic Design',
            link:'/brand'
        },
        {
            title:'Web Design (ui/ux)',
            link:'/web'
        },
        {
    title: 'Hire Me',
    link: '#'
        }
    ];

  return (
    <div id='mobileDesign' className="py-10 md:py-20 px-4 md:px-12 overflow-hidden bg-background">
        <div>
            <div>
             <Link href="/#projects" className='text-primary flex items-center gap-2 mt-4'>
            <span> <ChevronLeft className='w-6 h-6'/></span>
            <span>Back</span> 
            </Link>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary font-langar">Mobile UI/UX</h2>
            
            <p className="text-secondary text-lg pt-5 font-lato">Designing mobile experiences that feel natural, look stunning and work effortlessly.</p>
        </div>

        <div className='max-w-7xl '>
            <div >
                {mobileDesigns.map((item) => (
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

export default MobileDesign