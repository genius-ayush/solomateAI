export interface PartnerData{
    name : string ;
    avatar : string ;
    gender : string ; 
    personality : string[]
}

export interface Partner extends PartnerData{
    id : string ;
    userId : string ; 
    messageCount ?: number ; 
    createdAt : string 
}

export interface PartnerCardProps{
    partner: Partner ; 
    onClick : ()=> void ;
}