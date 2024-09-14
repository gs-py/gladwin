"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import { FaPhoneAlt,FaMapMarkedAlt,FaEnvelope } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8590645509",

  },
  {
    icon: < FaEnvelope />,
    title:" Email",
    description: "gladwinsanthosh6@gmail.com",
  },
  {
     icon: <FaMapMarkedAlt />,
    title:"Adress",
    description: "Alappat H,Koottala ,Thrissur,Kerala",

  }


]


import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Item } from "@radix-ui/react-select";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4 , duration: 0.4 , ease: "easeIn"}
      }}
      className="py-0"
    >

      <div className="  container mx-auto " >
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {
                  // form
          }
          <div className="order-2 xl:w-[54%] xl:order-none">
            <form className=" flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl my-0 pt-5">
              <h3 className=" text-4xl text-accent-defaults">Let's work together</h3>
              <p className="text-white/60">Open to new opportunities and collaborations. Let’s discuss how we can achieve great results together.</p>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email adress" />
                <Input type="phone" placeholder="Phone number" />
                
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem  value="est" >Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Other</SelectItem>
                   
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className=" h-28" placeholder="Type your Message here." />
              {/* Button */}
              <Button size="md" className="max-w-40"> Send Message</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex flex-1  items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((Item, index) => {
                return (
                  <li key={index} className=" flex items-center gap-6 ">
                    <div className="w-12 h-12 xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-defaults rounded-md flex  items-center justify-center">
                      <div className="text-[28px]">{ Item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{Item.title}</p>
                      <h3 className="text-sm">{ Item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>

        

      </div>
      

   </motion.section>
  )
}

export default Contact