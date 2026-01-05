
import { Pointer } from 'lucide-react'
import React from 'react'
import NavIcons from './NavIcons'
import Link from 'next/link'

function Conversation() {
  return (
    <div className="py-4 md:py-8 px-4 md:px-12 overflow-hidden bg-background">
<div className='max-w-5xl mx-auto text-center mb-12'>
<h2 className='text-2xl md-text-4xl font-langar'>
    Start A Conversation
</h2>
<p className='text-sm text-secondary'>
    Let’s turn your ideas into something meaningful
</p>
</div>


<div className='py-6 mx-auto text-center border border-primary rounded-lg md:rounded-full  max-w-3xl'>
<h2 className='font-lato text-2xl font-bold mb-6'>Contact me</h2>
<p> <em>Make a contact via Email. Linked-in, Twitter
Tiktok, Instagram and Behance Dms</em></p>
<div className='flex justify-center'>
    <Link href='/about'>
    <button className='bg-primary text-background p-2 rounded-full  mt-4 flex items-center justify-center gap-2'>
        
    <span><Pointer className='w-4 h-4'/> </span>
<span>Click here</span>

</button>
</Link>
</div>
</div>

<div className='mt-5 mx-auto text-center'>
    <p> <em>Social Media</em></p>
<h1 className='font-langar text-2xl '>Agboola Visual designer</h1>
<div className='flex justify-center py-4'>
    <NavIcons />
</div>
</div>
    </div>
  )
}

export default Conversation