"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Step2Props } from '@/types'

const presentTraits = [
  "Caring",
  "Flirty",
  "Professional",
  "Funny",
  "Intellectual",
  "Adventurous",
  "Romantic",
  "Supportive",
  "Playful",
  "Mysterious",
]

function OnBoardingStep2({data , onNext , onBack , onDataChange} : Step2Props) {
  
  const [selectedTraits, setSelectedTraits] = useState<string[]>(data.personality || []) ; 

  const [customTrait , setCustomTraits] = useState("") ;

  const isValid = selectedTraits.length > 0 ; 

  return (
    <div className='space-y-6'>

      <div className='text-center'>
        <h2 className='text-2xl font-bold text-white mb-2'>Personality Traits</h2>
        <p className='text-white/70'>
          Select traits that define your compaion's personality
        </p>
      </div>

      <div className='space-y-4'>
        <div>
          <Label className='text-white'>Present Traits</Label>
          <div className='grid grid-cols-2 gap-2 mt-2'>
            {presentTraits.map((trait)=>(
              <Button key={trait} onClick={()=>{}} className={`p-3 rounded-lg border-2 transition-all text-white `}>{trait}</Button>
            ))}
          </div>
        </div>

        <div>
          <Label className='text-white'>Add Custom Trait</Label>
          <div className='flex gap-2 mt-2'>
            <Input placeholder='Enter custom trait' className='bg-white/10 border-white/20 text-white placeholder:text-white/50'/>
            <Button variant="outline" className='border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent'>Add</Button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OnBoardingStep2