import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Link href={'/dashboard'} className='flex items-center'>
        <Image src={'/favicon.svg'} width={40} height={40} alt="SkillForge Logo" />
        <span className='ml-2 text-xl font-bold'>SkillForge</span>
      </Link>
      <UserButton />
    </div>
  )
}

export default Header