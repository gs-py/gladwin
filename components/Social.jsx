import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const socials = [
    { icon: <FaGithub />, path: "https://github.com/gs-py" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/gladwin7" },

   
];

const Social = ( {containerStyles, iconStyles} ) => {
  return (
      <div className={containerStyles}>
          {socials.map((item, index) => {
              return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{ item.icon }</Link>
              
          }) }</div>
  )
}

export default Social