'use client'
import { PartnerCardProps } from '@/types'
import { MessageCircle } from 'lucide-react'
import React from 'react'

function PartnerCard({ partner, onClick }: PartnerCardProps) {
    return (
        <div className='glass-card p-6 curson-pointer hover:bg-white/10 transition-all duration-300 transform hover:scale-105'>
            <div className='text-center mb-4'>
                <div className='text-4xl mb-3'>{partner.avatar}</div>
                <h3 className='text-xl font-semibold text-white'>{partner.name}</h3>
                <p className='text-white/70 text-sm'>{partner.gender}</p>
            </div>

            <div className='space-y-3'>
                <div>
                    <p className='text-white/80 text-sm font-medium mb-1'>Personality:</p>
                    <div className='flex flex-wrap gap-1'>
                        {/* {partner.personality.slice(0, 3).map((trait) => (
                        <span key={trait} className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded text-xs">
                            {trait}
                        </span>
                    ))} */}
                        {/* {partner.personality.length > 3 && (<span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                            +{partner.personality.length - 3} more
                        </span>)} */}
                    </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-white/60 text-sm">{partner.messageCount || 0} messages</span>
                    <MessageCircle className="h-4 w-4 text-purple-400" />
                </div>
            </div>
        </div>
    )
}

export default PartnerCard