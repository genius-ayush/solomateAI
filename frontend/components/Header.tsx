import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-center mt-10'> <Link href={"/auth"}><Button >Login to google</Button></Link></div>
  )
}

export default Header