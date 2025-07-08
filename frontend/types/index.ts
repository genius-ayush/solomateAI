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
    createdAt : string ; 
}

export interface PartnerCardProps{
    partner: Partner ; 
    onClick : ()=> void ;
}

export interface Step1Props {
    data: Partial<PartnerData> ; 
    onNext : ()=> void ; 
    onDataChange : (data:Partial<PartnerData>) => void
}