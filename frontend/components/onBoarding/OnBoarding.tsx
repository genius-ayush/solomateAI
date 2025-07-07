'use client'
import React, { useState } from 'react'
import OnBoardingStep1 from './OnBoardingStep1';
import OnBoardingStep2 from './OnBoardingStep2';
import OnBoardingStep3 from './OnBoardingStep3';

function OnBoarding() {

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Create your AI Comapanion</h1>
          <p className='text-white/70'>Step {currentStep} of 3</p>
        </div>

        <div className='glass-card p-8'>
            {currentStep === 1 && (
              <OnBoardingStep1/>
            )}

            {currentStep === 2 && (
              <OnBoardingStep2/>
            )}

            {currentStep === 3 && (
              <OnBoardingStep3/>
            )}
        </div>
      </div>
    </div>
  )
}

export default OnBoarding