import React from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

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

function OnBoardingStep2() {
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
              <Button key={trait} onClick={()=>{}} className={`p-3 rounded-lg border-2 transition-all text-white `}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoardingStep2