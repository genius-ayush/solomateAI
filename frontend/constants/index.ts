import { discordBlack, facebook, instagram, roadmap1, roadmap2, roadmap3, roadmap4, telegram, twitter } from "@/public/assets";


export const navigation = [
    {
        id: "0" ,
        title : "Features" , 
        url: "#features" ,
        onlyMobile: false
    }, 

    {
        id:"1" , 
        title : "About" , 
        url : "#about" , 
        onlyMobile : false
    },
    {
        id: "2" ,
        title : "FAQ" , 
        url: "#faqs" ,
        onlyMobile: false
    },  

    {
        id:"3" , 
        title: "Get Started", 
        url: "/login" , 
        onlyMobile: true
    }
]

export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];

  export const roadmap = [
    {
      id: "0",
      title: "Emotional Intelligence",
      text: "It’s not just smart—it understands how you feel and responds with empathy, care, and nuance to create truly meaningful conversations.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Always Available",
      text: "Whether it’s 2 AM or during your lunch break, your AI companion is always here to listen, support, and chat—whenever you need it.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Continuous Learning",
      text: "The more you interact, the more it understands your preferences, personality, and needs—growing with you over time to become your perfect companion.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Private & Secure",
      text: "Every conversation stays between you and your AI. With strong encryption and privacy safeguards, your trust is always respected.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];

  export const pricing = [
    {
      id: "0",
      title: "Connect with our Team",
      description: "Experience the future of digital relationships with our advanced AI technology",
      // price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    
  ];