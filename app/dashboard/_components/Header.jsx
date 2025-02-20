"use client"
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const path=usePathname()
  return (
    <div className='flex p-2 items-center justify-between bg-secondary shadow-lg'>
      <Image src={"/logo.svg"} width={160} height={100} alt='Logo'/>
      <ul className=' hidden  md:flex gap-6'>

        <li className={`hover:text-theme_primary hover:font-bold hover:cursor-pointer transition-all 
        ${path=='/dashboard' &&'text-theme_primary font-bold'}
        `}>Dashboard</li>

        <li className={`hover:text-theme_primary hover:font-bold hover:cursor-pointer transition-all 
        ${path=='/dashboard/questions' &&'text-theme_primary font-bold'}
        `}>Questions</li>

        <li className={`hover:text-theme_primary hover:font-bold hover:cursor-pointer transition-all 
        ${path=='/dashboard/upgrade' &&'text-theme_primary font-bold'}
        `}>Upgrade</li>
        <li className={`hover:text-theme_primary hover:font-bold hover:cursor-pointer transition-all 
        ${path=='/dashboard/how' &&'text-theme_primary font-bold'}
        `}>How It Works ?</li>
      </ul>
      <SignedIn>
        <UserButton/>
        </SignedIn>
    </div>
  )
}

export default Header