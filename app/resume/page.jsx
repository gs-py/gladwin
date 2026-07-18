"use client";

import { FaCss3,  FaReact, FaPython, FaHtml5, FaNodeJs } from "react-icons/fa"
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss , SiNextdotjs, SiDjango, SiTypescript, SiJavascript } from 'react-icons/si'




// about data

const about = {
  title: "About me",
  description: "I’m a Full Stack Developer currently building EdTech products at LyfSkills, with expertise across front-end, back-end, and machine learning. I’m passionate about building efficient, scalable web applications that solve real-world problems.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gladwin Santhosh",
    },
     {
      fieldName: "Phone",
      fieldValue: "+91 8590645509",
    },
      {
      fieldName: "Nation",
      fieldValue: "Indian",
    },
       {
      fieldName: "Email",
      fieldValue: "gladwinsanthosh6@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue:  "Available"
    },

    {
      fieldName: "Languages",
      fieldValue: " English ,Hindi, Malayalam"
       },
  ]
}


// Experience

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "My professional journey building full-stack products, from research fellowships to production EdTech platforms.",
  items: [
    {
      company: "LyfSkills",
      position: "Full Stack Developer",
      duration: "Nov 2025 - Present",
      highlights: [
        "Ship features across 5 production codebases: admin dashboard, consumer web app, parent portal, React Native partner app, and FastAPI backend",
        "Built end-to-end booking and renewal flows: trial booking with OTP, plan renewals, invoicing, and payment settlement UI",
        "Led full UI revamps of the admin dashboard and parent portal with mobile-first design",
        "Shipped Google OAuth, multi-currency and timezone-aware experiences for international users",
        "Built SEO infrastructure (prerendering, sitemaps, 301 redirect system) that scaled organic search from near-zero to 15M impressions and 79.7K clicks in 3 months, including Google Discover traffic"
      ]
    },
    {
      company: "Taphubs Global Private Limited",
      position: "Full Stack Developer",
      duration: "Jan 2025 - Nov 2025"
    },
    {
      company: "IIT Madras Research Park",
      position: "Graduate Fellow",
      duration: "Jan 2024 - Jun 2024"
    }
  ]

}

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "My academic background and professional certifications.",
  items: [
    {
      institution: "Government Engineering College",
      degree: "BTech in Computer Science",
      duration: "2020-2024",
    },
     {
      institution: "ExcelR",
      degree: "Full Stack Developer",
      duration: "2024",
    },
    {
      institution: "Coursera",
      degree: "Advanced React",
      duration: "2024",
    },

  ]

}


// skill data

const skills = {
  title: "My Skills",
  description: "Technologies I work with daily to build full-stack applications.",
  skillList: [
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
     {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
      {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: < FiFigma />,
      name: "figma",
    },
   

  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {delay: 1, duration: 0.4, ease: "easeIn"},
      }}
    className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className=" flex flex-col xl:flex-row gap-[60px]"  >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className=" min-h-[70vh] w-full"  >
            <TabsContent value="experience" className="w-full" > 
              <div className=" flex flex-col gap-[30px] text-center xl:text-left" >
                <h3 className=" text-4xl font-bold">{experience.title}</h3>
                {/* <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
                </p> */}
                <ScrollArea className=" h-[400px] " >
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}
                        className={` bg-[#232329] min-h-[184px] py-6 px-10  rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1 ${item.highlights ? "lg:col-span-2" : ""}`}
                        >
                          <span className=" text-accent-defaults">{ item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className=" flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent-defaults"></span>
                            <p className=" text-white/60">
                            {item.company}
                            </p  >
                          </div>
                          {item.highlights && (
                            <ul className=" mt-3 flex flex-col gap-2 text-left">
                              {item.highlights.map((point, i) => (
                                <li key={i} className=" text-white/60 text-sm flex gap-3 items-start">
                                  <span className=" w-[6px] h-[6px] mt-[6px] shrink-0 rounded-full bg-accent-defaults"></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}

                  </ul>

                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full  h-full" > 
              <div className=" flex flex-col gap-[30px] text-center xl:text-left" >
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                {/* <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description} </p>*/}
                
                <ScrollArea className=" md:h-[400px]  sm:h-max " >
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}
                        className=" bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1" 
                        >
                          <span className=" text-accent-defaults">{ item.duration}</span>
                          <h3 className=" text-xl  min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className=" flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent-defaults"></span>
                            <p className=" text-white/60">
                            {item.institution} 
                            </p  >
                          </div>

                        </li>
                      )
                    })}

                  </ul>

                </ScrollArea>

              </div>
            </TabsContent>

            <TabsContent value="skills" className="  w-full" >
              <div className=" flex flex-col gap-[30px] " >
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold"> { skills.title}</h3>
                  {/* <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0" >{  skills.description}</p> */}
                </div>
                <ScrollArea className=" md:h-[400px]  sm:h-max" >
                  <ul className=" grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4" >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex  items-center justify-center group ">
                              <div className="  text-6xl group-hover:text-accent-defaults transition-all duration-300">{ skill.icon}</div>

                            </TooltipTrigger>
                            <TooltipContent>
                               <div>{ skill.name}</div>

                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul></ScrollArea>
                

                

              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left" > 
              <div className=" flex flex-col gap-7">
                <h3 className=" text-4xl font-bold ">{about.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                <ul className=" grid  grid-cols-1 xl:grid-cols-2 gap-y-6 xl:max-w-[800px] max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center  sm:justify-between xl:justify-start gap-4">
                        <span className=" text-white/60">{item.fieldName}</span>
                        <span className=" text-white/60 hover:text-accent-defaults ">{ item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
            
        </Tabs>
      </div>


    </motion.div>
  )
}

export default Resume