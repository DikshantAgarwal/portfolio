import React from 'react'
import Link from 'next/link'
import {FiGithub} from 'react-icons/Fi'
import {FaLinkedin} from 'react-icons/Fa'
import {ThemeButton} from '@/components/ThemeButton'
export default function Header() {
  return (
    <nav className='flex flex-row justify-between items-start py-10 px-5 sm:py-20 sm:px-10 flex-wrap dark:bg-slate-800'>
        <div>
           <h2 className='text-xl font-medium'>Dikshant Agarwal</h2>
            <span className='text-gray-600'>Front-End Developer</span>
        </div>
        <div className='flex space-x-8 order-last mt-4 sm:order-none sm:mt-0'>
            <Link href='/About'>About</Link>
            <Link href='/Experience'>Experience</Link>
            <Link href='/Projects'>Projects</Link>
            <Link href='/Contacts'>Contacts</Link>
        </div>

        <div className='flex  space-x-4 mt-4 sm:mt-0'>
            <FiGithub/>
            <FaLinkedin/> 
            <ThemeButton/>
        </div>
    </nav>
  )
}
