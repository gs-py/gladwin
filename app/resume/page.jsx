"use client";

import { FaCss3,  FaReact, FaPython, FaHtml5 } from "react-icons/fa"
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss , SiNextdotjs, SiDjango } from 'react-icons/si'




// about data

const about = {
  title: "About me",
  description: "I’m a Fullstack Developer and B.Tech graduate with expertise in front-end and back-end technologies. I’m passionate about building efficient, scalable web applications that solve real-world problems.",
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
  title: " My Experience",
  description: "lore........ffsfsf",
  items: [
    {
      company: "IIT Madras Research Park",
      position: "Graduate Fellow",
      duration: "2024 Jan -June"
    }
  ]
  
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: " My Education",
  description: "lore........ffsfsf",
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
      institution: "Couresera",
      degree: "Advanced React",
      duration: "2024",
    },
   
  ]
  
}


// skill data

const skills = {
  title: "My Skills",
  description: "fsdfsdfsdfffdgdggdgd",
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
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
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
                        className=" bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1" 
                        >
                          <span className=" text-accent-defaults">{ item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className=" flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent-defaults"></span>
                            <p className=" text-white/60">
                            {item.company} 
                            </p  >
                          </div>

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