
import React from 'react'
import NameTypewriter from './NameTypewriter'
import Guy from "./../public/imageandcv/Mask group.png"
import RotatingRoles from './RotatingRoles'
import Image from 'next/image';
import HeroButtons from './HeroButtons';

function Hero() {
  return (
    <div id='home' className='px-4  md:px-12 py-20 flex flex-col-reverse md:flex-row justify-between items-center space-y-10 gap-8 md:gap-0'>
        
        {/* first section */}
       <div>
         <h1 className='font-langar text-4xl font-medium mb-4 '>
            Hello, I&apos;m
        </h1>
      <div className='mb-4'>
          <NameTypewriter />
      </div>
       <div>
         <RotatingRoles />
       </div>
       <p className='max-w-3xl font-medium text-primary'>
        I craft visually stunning and functional designs that captures attention, sparks creativity and elevates products, brands and graphics to a new height.  
       </p>
       <div className='mt-6'>
        <HeroButtons />
       </div>
       </div>
       {/* second section */}
       <div className="group">
        <Image src={Guy} alt="Guy"
        width={300}
        height={300 }
        className="
      transition-transform 
      duration-500 ease-out
      group-hover:scale-110
      group-hover:-translate-y-3
      group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]
      cursor-pointer
    "
        />
       </div>

    </div>
  )
}

export default Hero