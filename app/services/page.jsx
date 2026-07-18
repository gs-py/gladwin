"use client";
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I offer tailored web development solutions that combine responsive design and high performance to meet your business needs. From custom websites to complex e-commerce platforms and content management systems, I ensure a seamless and efficient digital experience.",
    href: "/contact",
  },
   {
    num: "02",
    title: "UI/UX Design",
     description: "I design intuitive and engaging user interfaces that effectively combine aesthetics with functionality. Through detailed research and usability testing, I create solutions that enhance user satisfaction and drive meaningful results.",
     href: "/contact",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description: "I build cross-platform mobile apps with React Native — from onboarding and payments to offline-friendly flows. I ship production apps daily, covering everything from UI polish to state management and native integrations.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Backend & API Development",
    description: "I design and build robust backends with FastAPI, Node.js, and Django — REST APIs, authentication, payments, invoicing, and third-party integrations, with the validation and error handling production traffic demands.",
    href: "/contact",
  },
  {
    num: "05",
    title: "SEO & Performance",
    description: "I make JavaScript-heavy sites fully readable to search engines: prerendering pipelines, sitemap architecture, redirect systems, and analytics. This work has scaled a production platform to millions of monthly search impressions.",
    href: "/contact",
  },
  {
    num: "06",
    title: "AI & Machine Learning",
    description: "I build ML-powered features and LLM-based tools — from deep learning models like deepfake detection with ResNeXt and LSTM to agentic AI assistants that read files, run commands, and automate real workflows.",
    href: "/contact",
  },

]

import { motion } from 'framer-motion';



const Services= () => {
  return (

    <section className=' min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 1 , duration: 0.4, ease: "easeIn"},
          }}
          className=' grid  grid-cols-1 md:grid-cols-2 gap-[60px] justify-center '
        >
          {services.map((service, index) => {
            return (
              <div key={index} className=' flex-1 flex flex-col justify-center gap-6  group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className=' text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover  transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link href={service.href} className=' w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-defaults transition-all duration-500 flex justify-center items-center hover:-rotate-45' >
                    <BsArrowDownRight className=' text-primary text-3xl ' />
                  </Link>
                </div>
                <h2 className=' text-[42px] font-bold leading-none text-white group-hover:text-accent-defaults transition-all duration-500' >
                  {service.title}
                </h2>
                {/* discription */}
                <p className='  text-white/60'>{service.description}</p>
                {/* border   */}
                <div className='  border-b border-white/20 w-full'>

                </div>
              </div>
            );
          })}

        </motion.div>

    </div>
    </section>
  )
}

export default Services