import React from 'react'
import { Button } from '../ui/button';
import Heading from '../Heading';
import Section from "../Section";
import TagLine from '../Tagline';
import { roadmap } from '@/constants';
import { check2 , grid , loading } from "@/public/assets";
import {  Gradient1 } from '../ui/roadmap';
import Image from "next/image";
function Features() {
  return (
    <Section  id="features" >
    <div className="container md:pb-10">
      <Heading tag="Why choose SoloMate?" title=" Features" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Image
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient1 />
      </div>

      
    </div>
  </Section>
  )
}

export default Features