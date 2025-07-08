"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Step1Props } from '@/types'

const avatars = ["👩", "👨", "🧑", "👩‍💼", "👨‍💼", "👩‍🎨", "👨‍🎨", "👩‍🔬", "👨‍🔬"]
const genders = ["Female", "Male", "Non-binary"];

function OnBoardingStep1({data , onNext , onDataChange}: Step1Props) {
    const [name, setName] = useState(data.name || "");
    const [selectedAvatar, setSelectedAvatar] = useState(data.avatar || avatars[0]);
    const [selectGender, setSelectGender] = useState(data.gender || genders[0]);

    const handleNext = ()=>{
        onDataChange({
            name , 
            avatar : selectedAvatar , 
            gender : selectGender, 
        })

        onNext() ; 
    }

    const isValid = name.trim().length > 0

    return (
        <div className='space-y-6'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold text-white mb-2'>Basic Information</h2>
                <p className='text-white/70'>Let's start with the basics about your AI companions</p>
            </div>

            <div className='space-y-4'>
                <div>
                    <Label htmlFor='name' className='text-white'>Partner Name</Label>
                    <Input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter a name for you companion' className='bg-white/10 border-white/20 text-white placeholder:text-white/50' />
                </div>

                <div>
                    <Label className='text-white'>Choose Avatar</Label>
                    <div className='grid grid-cols-3 gap-3 mt-2'>
                        {avatars.map((avatar) => (
                            <Button key={avatar} className={`p-4 text-2xl rounded-lg border-2 transition-all ${selectedAvatar == avatar ? "border-purple-400 bg-purple-400/20" : "border-white/20 hover:border-white/40"}`} onClick={() => setSelectedAvatar(avatar)}>{avatar}</Button>
                        ))}
                    </div>
                </div>

                <div>
                    <Label className='text-white'>Gender</Label>
                    <div className='grid grid-cols-3 gap-3 mt-2'>
                        {genders.map((gender) => (
                            <Button key={gender} onClick={() => { setSelectGender(gender) }} className={`p-3 rounded-lg border-2 transition-all text-white ${selectGender == gender ? "border-purple-400 bg-purple-400/20" : "border-white/20 hover:border-white/40"}`}>{gender}</Button>
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleNext}
                    disabled={!isValid}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                    Next Step
                </Button>
            </div>
        </div>
    )
}

export default OnBoardingStep1