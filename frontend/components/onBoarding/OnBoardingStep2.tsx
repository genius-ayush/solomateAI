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

  const toggleTrait = (trait: string) => {
    setSelectedTraits((prev) => (prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]))
  } 

  const addCustomTrait = ()=>{
    if(customTrait.trim() && !selectedTraits.includes(customTrait.trim())){
      setSelectedTraits((prev)=> [...prev , customTrait.trim()])
      setCustomTraits("") ; 
    }
  }

  const handleNext = ()=>{
    onDataChange({personality : selectedTraits})
    onNext() ; 
  }

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
              <button
              key={trait}
              onClick={() => toggleTrait(trait)}
              className={`p-3 rounded-lg border-2 transition-all text-white ${
                selectedTraits.includes(trait)
                  ? "border-purple-400 bg-purple-400/20"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              {trait}
            </button>
            ))}
          </div>
        </div>

        <div>
          <Label className='text-white'>Add Custom Trait</Label>
          <div className='flex gap-2 mt-2'>
            <Input value={customTrait} onChange={(e)=>setCustomTraits(e.target.value)} placeholder='Enter custom trait' className='bg-white/10 border-white/20 text-white placeholder:text-white/50' onKeyPress={(e)=>e.key === "Enter" && addCustomTrait}/>


            <Button onClick={addCustomTrait} variant="outline" className='border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent'>Add</Button>
          </div>
        </div>

        {selectedTraits.length > 0 && (
          <div>
            <Label className='text-white'>SelectedTraits</Label>
            <div className='flex flex-wrap gap-2 mt-2'>
              {selectedTraits.map((trait)=>(
                <span key={trait} className='px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm corsor-pointer' onClick={()=> toggleTrait(trait)}>
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='flex gap-3'>
        <Button onClick={onBack} variant='outline' className='flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent'>Back</Button>
        <button onClick={handleNext} disabled={!isValid} className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'>Next Step</button>
      </div>
    </div>
  )
}

export default OnBoardingStep2