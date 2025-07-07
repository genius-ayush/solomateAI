'use client'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import Section from '../Section'
import { gradient, heroBackground } from '@/public/assets'
import Image from 'next/image'
import { curve, robot } from '@/public/assets'
import hero2 from '@/public/assets/hero/hero2.png'

import { BackgroundCircles, BottomLine, Gradient } from "@/components/ui/Hero";
import CompanyLogos from '../CompanyLogo'
import { Gradient1 } from '../ui/roadmap'
import Link from 'next/link'


function Hero() {

  const parallaxRef = useRef(null);
  return (
    <Section className='pt-[12rem] -mt-[5.25rem] ' crosses crossesOffset='lg:translate-y-[5.25rem]' customPaddings id='hero'>
      <div className='container relative'>

        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-[6.25rem]'>
          <h1 className="h1 mb-6">
            Create your perfect &nbsp;AI&nbsp;Companion with {` `}
            <span className="inline-block relative">
              Solomate{" "}
              <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Design, customize, and chat with AI partners tailored to your personality. Experience meaningful conversations with companions who understand you.
          </p>

          <Link href="/auth"><Button className='text-n-8 bg-white hover:text-purple-900 hover:bg-white font-code font-bold'>Start Creating</Button></Link>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-[#0e0628] rounded-[1rem]">
              <div className="h-[1.4rem] bg-[#0e0628] rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">

                <Image
                  src={hero2}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[0.8] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />


              </div>
            </div>

            <Gradient />
            
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1 -z-10 w-[150%] max-w-none opacity-10 pointer-events-none"
              src={gradient}
              width={200}
              height={200}
              alt="Gradient"
            />
            <Image
              className="absolute bottom-0 right-1/2 -translate-x-1 -z-10 w-[150%] max-w-none opacity-10 pointer-events-none"
              src={gradient}
              width={200}
              height={200}
              alt="Gradient"
            />

          </div>


        </div>

        <CompanyLogos />

      </div>
      <BottomLine />
    </Section>
  )
}

export default Hero