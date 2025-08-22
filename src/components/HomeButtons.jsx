import { FaArrowRightLong } from "react-icons/fa6"
import { SiLinktree } from "react-icons/si"

const HomeButtons = () => {
  return (
    <div className='flex justify-between gap-5'>
      <a
        href="https://discord.gg/dUpVeHdZwK"
        target="_blank"
        rel="noopener noreferrer"
        className="z-3 flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken"
      >Discord
        <div className="flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4">
          <FaArrowRightLong className="text-lg" />
        </div>
      </a>
      <a
        href='https://linktr.ee/gatorgaminguf'
        rel="noopener noreferrer"
        className="z-3 flex justify-between w-fit px-5 h-10 items-center border-1 border-ggwhite text-ggwhite rounded-3xl darken"
      >Learn More
        <div className="flex items-center justify-center rounded-full h-8 w-8 transform translate-x-3">
          <SiLinktree size='20'/>
        </div>
      </a>
    </div>
  )
}

export default HomeButtons