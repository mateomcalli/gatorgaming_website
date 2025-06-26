import NavButtons from '../NavButtons'
import { FaDiscord, FaInstagram } from 'react-icons/fa'

const Navbar = ({selectedPage, setSelectedPage}) => {
  return (
    <div className="font-display fixed grid grid-cols-3 items-center w-screen top-0 bg-[linear-gradient(180deg,_#0A0E15_40%,_rgba(10,_14,_21,_0)_100%)] z-10 h-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex-shrink-0">
        <img
          onClick={() => setSelectedPage('Home')}
          className="w-16"
          src="https://i.imgur.com/n2RSSOQ.png"
        ></img>
      </div>
      <div className="flex justify-center text-nowrap gap-4 z-2 sm:gap-6 md:gap-8 lg:gap-10">
        <NavButtons 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <div className="text-3xl flex flex-row justify-end gap-4">
          <a 
            href="https://discord.com/invite/s99axhqQac"
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDiscord className='text-ggwhite fade-orange'/>
          </a>
          <a 
            href="https://www.instagram.com/gatorgaminguf/"
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='text-ggwhite fade-orange'/>
          </a>
        </div>
    </div>
  )
}

export default Navbar