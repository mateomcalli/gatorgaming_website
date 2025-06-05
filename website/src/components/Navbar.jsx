import NavButtons from './NavButtons'
import { FaDiscord, FaInstagram } from 'react-icons/fa'

const Navbar = ({selected, setSelected}) => {
  return (
    <div className="font-display fixed grid grid-cols-3 items-center w-screen top-0 bg-ggbg z-10 h-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex-shrink-0">
        <img onClick={() => setSelected('Home')} className="w-16" src="https://i.imgur.com/n2RSSOQ.png"></img>
      </div>
      <div className="flex justify-center text-nowrap gap-4 z-2 sm:gap-6 md:gap-8 lg:gap-10">
        <NavButtons selected={selected} setSelected={setSelected}/>
      </div>
      <div className="text-3xl flex flex-row justify-end gap-4">
          <FaDiscord className='text-ggwhite'/>
          <FaInstagram className='text-ggwhite'/>
        </div>
    </div>
  )
}

export default Navbar