import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload} from "react-icons/fi"


const Home = () => {
  return (

    <section className="  h-full ">
      <div className="h-full container mx-auto  ">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8  ">

{/* {text} */}
        <div className=" text-center xl:text-left order-2 xl:order-none ">
          <span className=" text-xl">Software Developer</span>
          <h1 className=" h1 ">Hello I'm <br /><span className=" text-accent-defaults ">Gladwin Santhosh</span></h1>
          <p className=" max-w-[500px] mb-9 text-white/80">I excel at developing ML models and building full-stack applications, with a passion for solving complex problems and continuously improving my skills in machine learning and development.</p>
        
          <div className=" flex flex-col xl:flex-row items-center gap-8">
            <a href="https://drive.google.com/file/d/12hTVKsL6ryuwwvCyVzUCI8MEFHXvXK7r/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><Button variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="  text-xl   "  />
            </Button></a>
              
            <div className=" mb-8  xl:mb-0">
                           < Social containerStyles=" flex gap-6 " iconStyles=" w-9 h-9 border border-accent-defaults rounded-full flex justify-center items-center text-accent-defaults text-base hover:bg-accent-defaults hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>

        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0 ">

          <Photo />
        </div>
    
    
    
      </div>
      </div>
      <Stats />
    
    </section>
    
  )
}

export default Home