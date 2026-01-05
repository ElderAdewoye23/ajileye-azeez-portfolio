
import React from 'react'
import { NavIcons as navIconsData } from '../data/data';

function NavIcons() {
  return (
    <div>
         <div className="flex space-x-4 justify-center md:justify-start">
{navIconsData.map((Icon,index)=> (
    <Icon key={index} className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:bg-secondary bg-white text-black p-1 rounded" />
)) }
    </div>
    </div>
  )
}

export default NavIcons