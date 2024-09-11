"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiMenuFries } from 'react-icons/ci'


const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },
    {
        name: 'resume',
        path: "/resume"
    },
    {
        name: 'work',
        path: "/work"
    },
    {
        name: 'contact',
        path: "/contact"
    },
];
    

const MobileNav = () => {
    const pathname = usePathname();
  return (
      <Sheet>
          <SheetTrigger className=" flex justify-center items-center">
              <CiMenuFries className="text-[32px] text-accent-defaults" />
          </SheetTrigger>
          <SheetContent className=" flex flex-col">
              <div className=" my-auto flex flex-col text-center text-2xl ">
                  <Link href={"/"}>
                      <h1 className=" text-xl font-semibold ">Gladwin<span className=" text-accent-defaults">.</span>
                      </h1></Link>
              </div>
              <nav className=" flex  flex-col justify-center items-center gap-8 my-auto">
                   {links.map((link, index) => {
              return <Link href={link.path} key={index} className={` ${link.path === pathname && " text-accent-defaults border-b-2 border-accent-defaults"} text-l capitalize  hover:text-accent-defaults transition-all`} >{ link.name}</Link>
          })}</nav>
              
          </SheetContent>
          
     </Sheet>
  )
}

export default MobileNav