
import React from 'react'
import { Experience as ExperienceData } from '../data/data'

function Experience() {
  return (
    <div className="py-5 md:py-10 px-4 md:px-12 overflow-hidden bg-background">
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 '>
            {ExperienceData.map((item)=> (
                <div key={item.id} className='flex flex-col items-center justify-center space-y-2'>
                    <h2 className='text-2xl md:text-4xl font-langar text-secondary mb-2'>{item.title}</h2>
                    <p className='text-primary font-semibold text-lg'>{item.status}</p>
                    <p className='text-xs'>{item.showMessage ? item.message : ''}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience