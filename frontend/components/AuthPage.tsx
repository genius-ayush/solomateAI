"use client"
import React from 'react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
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
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to SoloMate</h1>
      <p className="mb-8 text-center max-w-md">
        Your personalized AI companion. Create, connect, and never feel alone again.
      </p>
      <button
        onClick={handleLogin}
        className="bg-white text-black font-medium py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition"
      >
        Login with Google
      </button>
    </main>
  )
}

export default AuthPage