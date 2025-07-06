"use client"
import React from 'react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { gradient } from '@/public/assets'
import Section from './Section';
import Image from 'next/image';
function AuthPage() {
    
    const router = useRouter() ; 
    const handleLogin = ()=>{
        window.location.href = `http://localhost:5000/auth/google`
    }

    useEffect(() => {
      // check if user already has token and redirect to dashboard
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/dashboard");
      }
    }, []);
  return (
    <Section className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-2 h1">Welcome to SoloMate</h1>
      <p className="mb-8 text-center max-w-md text-n-2">
        Your personalized AI companion. Create, connect, and never feel alone again.
      </p>
      <button
        onClick={handleLogin}
        className="bg-white text-black font-medium py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition font-code"
      >
        Login with Google
      </button>

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
    </Section>
  )
}

export default AuthPage