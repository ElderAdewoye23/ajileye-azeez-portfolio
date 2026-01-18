
import { ChevronLeft, Briefcase, GraduationCap, Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div id='about' className="py-10 md:py-20 px-4 md:px-12 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
            <div className='mb-6'>
                <Link href="/#home" className='text-primary flex items-center gap-2 mt-4 hover:text-secondary transition-colors'>
                    <span> <ChevronLeft className='w-6 h-6'/></span>
                    <span>Back</span> 
                </Link>
            </div>
            
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl text-primary font-langar mb-4">About Me</h1>
                <p className="text-secondary text-lg font-lato">A fusion of logic and creativity, fueled by an insatiable drive to bring bold ideas to life.</p>
            </div>

            {/* My Bio */}
            <section className="mb-12">
                <h2 className="text-3xl text-primary font-langar mb-4">My Bio</h2>
                <p className="text-secondary text-lg leading-relaxed font-lato">
                    I&apos;m a passionate designer who creates stunning visual experiences, from social media to websites and brand identities and mobile interfaces. 
                    With a keen eye for details and a knack for understanding your vision, I&apos;ll craft a distinct voice and visual presence that sets your audience.
                </p>
            </section>

            {/* My Experience */}
            <section className="mb-12">
                <h2 className="text-3xl text-primary font-langar mb-6 flex items-center gap-2">
                    <Briefcase className="w-8 h-8" />
                    My Experience
                </h2>
                <p className="text-secondary text-lg leading-relaxed font-lato mb-6">
                    From tackling complex challenges to crafting lasting solutions, my career path has been defined by a drive to innovate and make a meaningful impact. 
                    With each new experience, I&apos;ve honed my skills, expanded my horizons, and fueled my passion for turning vision into reality.
                </p>
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-background font-langar">Graphic Designer</h3>
                        <p className="text-background">SmartPrint - Lagos State</p>
                        <p className="text-background">2020-2021</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-background font-langar">Product Designer</h3>
                        <p className="text-background">Internship</p>
                        <p className="text-background">2025</p>
                    </div>
                </div>
            </section>

            {/* My Education */}
            <section className="mb-12">
                <h2 className="text-3xl text-primary font-langar mb-6 flex items-center gap-2">
                    <GraduationCap className="w-8 h-8" />
                    My Education
                </h2>
                <p className="text-secondary text-lg leading-relaxed font-lato mb-6">
                    My academic journey laid the groundwork for success, fueled by curiosity, innovation, and an insatiable pursuit of knowledge.
                </p>
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-background font-langar">Tertiary</h3>
                        <p className="text-background">Kwara State Polytechnic (ND & HND)</p>
                        <p className="text-background">Ilorin, Kwara State, NG</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-background font-langar">Secondary</h3>
                        <p className="text-background">Great Knowledge Academic Secondary School</p>
                        <p className="text-background">Ogun State, NG</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-background font-langar">Primary</h3>
                        <p className="text-background">MainSpring Nursery and Primary School</p>
                        <p className="text-background">Lagos State, NG</p>
                    </div>
                </div>
            </section>

            {/* View Portfolio */}
            <div className="text-center">
                <Link href="/#projects" className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-lg font-langar text-lg hover:bg-secondary transition-colors shadow-lg hover:shadow-xl">
                    <Eye className="w-5 h-5" />
                    View my portfolio
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About