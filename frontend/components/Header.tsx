'use client'
import React, { useState } from 'react'
// import { Button } from './ui/button'
import Link from 'next/link'
import MenuSvg from '@/public/assets/svg/MenuSvg'
import { Handshake } from 'lucide-react';
import { navigation } from '@/constants';
import { HamburgerMenu } from './ui/header';
import { Button } from './ui/button';
//@ts-ignore
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function Header() {
  const [activeLink, setActiveLink] = useState('#hero');
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleClick = () => {
    if(!openNavigation)return ; 

        enablePageScroll() ;    
        setOpenNavigation(false) ; 
  }

  const toggleNavigation = ()=>{

    if(openNavigation){
        setOpenNavigation(false)
        enablePageScroll() ; 
    }else{
        setOpenNavigation(true) ; 
        disablePageScroll() ; 
    }
}
  return (
    <div className={`fixed top-0 left-0 z-50 w-full   border-b border-n-6 lg:bg-n-8/50 lg:backdrop-blur-sm ${openNavigation ? `bg-n-8` : `bg-n-8/90 backdrop:-blur-sm`}`}>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block w-[12rem] xl-[12rem] xl-mr-8'>
          <div className='flex gap-2 '>
            <Handshake className='text-white' size={32} />
            <span className='text-white text-2xl font-semibold'>Solomate</span>
          </div>
        </a>
        <nav className={`${openNavigation ? 'flex' : 'hidden'}  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => {
                  handleClick();
                  const href = e.currentTarget.getAttribute("href");
                  if (href) setActiveLink(href);
                }}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 

px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
${item.url === activeLink ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12 ${item.onlyMobile ? "lg:hidden" : ""}`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Button variant="ghost" className="text-purple-200 hover:text-color-1 hover:bg-n-8 border-2 hidden lg:flex bg-n-8 font-code font-semibold">
            GET STARTED
        </Button>

        
        <Button className="ml-auto text-purple-200  hover:text-color-1 hover:bg-n-8 border-1 lg:hidden bg-n-8 " onClick={toggleNavigation}>

          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header