import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
      <Link href={'/'} className='flex items-center'>
        <Image src={'/favicon.svg'} width={40} height={40} alt="SkillForge Logo" />
        <span className='ml-2 text-xl font-bold'>SkillForge</span>

      </Link>
      <Link href={'/dashboard'}>
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default Header