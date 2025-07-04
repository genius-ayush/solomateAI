import React from 'react'

interface SectionProps{
    classname?:string ; 
    id?: string;
    crosses?: boolean ; 
    
}

const Section:React.FC<SectionProps> =()=>{
    return (
        <div>section</div>
    )
}
export default Section