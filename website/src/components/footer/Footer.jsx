import { LuX } from 'react-icons/lu'
import { FaDiscord, FaInstagram } from 'react-icons/fa'
import { SiLinktree } from "react-icons/si";

const Footer = ( {maxMd} ) => {
  return (
    <div className='mt-20 relative w-screen h-fit flex justify-center md:mt-70 lg:mt-20 xl:-mt-10 2xl:mt-0'>
      {!maxMd && <img className='absolute inset-0 w-full h-full object-cover pointer-events-none overflow-hidden z-0 sm:z-0' src='footer-blur4.png'/>}
      <div className='relative px-8 w-full md:w-169 lg:w-205 xl:w-240 2xl:w-300 flex flex-col z-2'>
        <div className='flex h-fit w-full items-center gap-5 z-2'>
          <LuX size='40'/>
          <div className='h-[1px] w-[79%] xl:w-[83%] bg-ggwhite'/>
          <p className='text-ggwhite text-sm font-display text-nowrap'>Thanks for visiting</p>
        </div>
        <div className='flex justify-between z-2'>
          <img
            src='gatorgaming-logo.png'
            className='w-28'
          />
          <img
            src='gud-logo.png'
            className='mt-2 w-21 h-21'
          />
        </div>
        <div className='flex justify-between z-2'>
          <p className='text-sm sm:text-lg w-fit pl-2 md:text-lg text-ggorange font-display'>Contact us</p>
          <p className='text-sm sm:text-lg sm:w-fit pr-2 md:text-lg text-[#b398d6] font-display'>Designed by Gator User Design</p>
        </div>
        <div className='flex justify-between z-2'>
          <div className='flex items-center gap-5 w-fit h-fit pt-3 pl-2 font-display'>
            <FaDiscord size='30'/>
            <a href='https://discord.com/invite/s99axhqQac' target='_blank' rel="noopener noreferrer">
              <p className='underline text-xs text-gray-300'>Discord</p>
            </a>
          </div>
          <div className='flex items-center gap-5 w-fit h-fit pt-3 pr-2 font-display'>
            <a href='https://linktr.ee/gatoruserdesign' target='_blank' rel="noopener noreferrer">
              <p className='underline text-xs text-gray-300'>Linktree</p>
            </a>
            <SiLinktree size='28'/>
          </div>
        </div>
        <div className='flex justify-between z-2'>
          <div className='flex items-center gap-5 w-fit h-fit pt-3 pl-2 pb-5 font-display'>
            <FaInstagram size='30'/>
            <a href='https://www.instagram.com/gatorgaminguf/' target='_blank' rel="noopener noreferrer">
            <p className='underline text-xs text-gray-300'>Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer