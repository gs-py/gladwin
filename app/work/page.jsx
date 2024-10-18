"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: "SaaS Application",
    title: "RiffWave",
    description: "A SaaS music app offering personalized playlists, recommendations, and social sharing. Admin access includes user management, analytics, and content control for efficient app administration.",
    stack: [{ name: "ReactJs" }, { name: "ExpressJs" }, { name: "MongoDb" }, { name: "NodeJs" }],
    image: '/assests/work/muzi.png',

 // Corrected path
    github: "https://github.com/gs-py/spoti",
    live: "https://muzi1.netlify.app/"
  },
  {
    num: '02',
    category: "Machine Learning ",
    title: "Deepfake Video Detection using ResNeXt and LSTM",
    description: "Developed a deepfake detection model leveraging ResNeXt for spatial feature extraction and LSTM for temporal sequence analysis, effectively identifying manipulated videos with high accuracy.",
   stack: [
  { name: "Python" },
  { name: "Flask" },
  { name: "ResNeXt" },
  { name: "LSTM" },
  { name: "TensorFlow/PyTorch" }
]
,
    image: '/assests/work/dfd.png', // Corrected path
    github: "https://github.com/example/repo2",
    live: "https://example.com/live2"
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]); // Initialize with the first project

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]); // Access 'projects' array
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay:1.8 ,duration :0.4,ease:"easeInOut" },   }} className="min-h-[80vh] flex flex-col justify-center  xl:py-0 xl:px-0 items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-center order-2 xl:order-none ">
               
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline  round">{project.num}</div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-defaults transition-all duration-500 capitalize">{project.category}</h2>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-l text-accent-defaults">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center flex bg-white/5 group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-defaults" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center flex bg-white/5 group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-defaults" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] " onSlideChange={handleSlideChange}>
            
              {projects.map((project, index) => (
                <SwiperSlide key={index} className=" w-full">
                  {/* Render the project image */}
                  <div className="h-[460px]  relative group  flex justify-center items-center ">
                    {/* overlay */}
                   <WorkSliderBtns  containerStyles=" flex gap-2  z-20 absolute right-0 xl:justtify-none xl:bottom-0 w-full justify-between xl:w-max" btnStyles=" bg-accent-defaults hover:bg-accent-hover text-primary w-[33px] h-[33px] flex justify-center items-center transition-all" />
                    {/* image */}
                    <div className=" relative w-full h-full   ">
                       
                      <Image src={project.image} fill className="object-contain" alt="Ia" />
                      {/* <Image src={project.image}  alt="" objectPosition="center" objectFit="contain" fill/> */}
                    </div>
                  </div>
                 
                </SwiperSlide>
              ))}
               
              {/* slider Buttons */}
             
            </Swiper>
           
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
