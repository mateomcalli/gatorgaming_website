import NavButtons from './NavButtons'
import { FaDiscord, FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='font-display fixed grid grid-cols-3 items-center w-screen top-0 bg-[linear-gradient(180deg,_#0A0E15_40%,_rgba(10,_14,_21,_0)_100%)] z-10 h-20 px-4 sm:px-6 md:px-8 lg:px-10'>
      <NavLink key='logo' to='/'>
        <div className='flex-shrink-0'>
          <img
            className='w-16 pointer-events-none select-none'
            src='https://i.imgur.com/n2RSSOQ.png' // change to public file if necessary (lol)
            alt='Gator Gaming logo'
          />
        </div>
      </NavLink>
      <div className='flex justify-center text-nowrap gap-4 z-2 sm:gap-6 md:gap-8 lg:gap-10'>
        <NavButtons/>
      </div>
      <div className='text-3xl flex flex-row justify-end gap-4'>
          <a 
            href='https://discord.com/invite/s99axhqQac'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDiscord className='text-ggwhite fade-orange'/>
          </a>
          <a 
            href='https://www.instagram.com/gatorgaminguf/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='text-ggwhite fade-orange'/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar