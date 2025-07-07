'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import axios from 'axios';
import { Partner } from '@/types';
import PartnerCard from './partner-cart';
import { useRouter } from "next/navigation"

function Dashboard() {
    const token = localStorage.getItem("token");
    const router = useRouter() ; 
    const [loading, setLoading] = useState(true);
    const [partners , setPartners] = useState<Partner[]>([]); 

    const handleChatWithPartner = (partnerId:string)=>{
        console.log({partnerId})
    }

    const handleCreateNew = ()=>{
        router.push("onBoarding")
    }

    useEffect(() => {
        const fetchPartner = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/partner`, {
                    headers: { authorization: `Bearer ${token}` }
                })
                setPartners(response.data) ; 
            } catch (error) {
                console.error("Error fetching data", error)
            } finally {
                setLoading(false);
            }
        }

        fetchPartner();
    }, [])

    if(loading){
        return(
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-white'>Loading your companions...</div>
            </div>
        )
    }

    return (
        <div className='min-h-screen p-4'>
            <div className='max-w-6xl mx-auto'>
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Your AI Companions</h1>
                        <p className="text-white/70">Choose a companion to start chatting</p>
                    </div>
                    <Button
                        onClick={handleCreateNew}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Partner
                    </Button>
                </div>

                {partners.length ===  0 ? (
                    <div className='text-center py-12'>
                        <div className='glass-card p-8 max-w-md mx-auto'>
                            <h3 className='text-xl font-semibold text-white   mb-4'>No companions yet</h3>
                            <p className='text-white/70 mb-6'>Create you first AI companion to get started</p>
                            <Button onClick={handleCreateNew} className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:t0-pink-600'><Plus/> Create Your First Partner</Button>
                        </div>
                    </div>
                ):(
                    <div>
                        {partners.map((partner)=>(
                            <PartnerCard key={partner.id} partner={partner} onClick={()=>handleChatWithPartner(partner.id)}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard