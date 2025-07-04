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
      title: "Empirical Iteration",
      text: "Our research embraces rapid hypothesis testing and continuous refinement, prioritizing methodical iteration on findings over single interventions",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Human Expertise Primacy",
      text: "AWe hold that human-generated data contains cognitive patterns and expertise that cannot be replicated through synthetic generation or web scraping.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Practitioner Verification",
      text: "We maintain rigorous standards for domain experts, ensuring validation by individuals with demonstrated field expertise.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Adaptive Methodology",
      text: "Our approach scales dynamically to address both targeted capability gaps and broader questions about AI functionality.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];