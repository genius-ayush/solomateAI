"use client"; // for App Router

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    
    if (token) {
      localStorage.setItem("token", token);
      
      router.push("/dashboard");
    } else {
      router.push("/auth"); 
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      Authenticating...
    </div>
  );
}
