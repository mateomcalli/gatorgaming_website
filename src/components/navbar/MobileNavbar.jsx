import { useState } from 'react'
import AnimatedBurger from './AnimatedBurger'
import { GoHome } from 'react-icons/go';
import { FaRegBookmark } from 'react-icons/fa6';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { TbCalendarStar } from 'react-icons/tb';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { FaDiscord, FaInstagram } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = ({ setSelectedPage }) => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <>
      <div className='px-6 border-b-1 border-[#2e2e2d] fixed justify-between items-center w-screen top-0 flex h-20 bg-ggbg font-display z-10'>
        <div className='w-fit flex-shrink-0'>
          <img
            onClick={() => setSelectedPage('Home')}
            className='w-16'
            src='https://i.imgur.com/n2RSSOQ.png'
          ></img>
        </div>
        <div 
          className='relative w-fit text-3xl flex justify-end gap-4'
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <AnimatedBurger isNavOpen={isNavOpen}/>
        </div>
      </div>
      <AnimatePresence>
        {isNavOpen && 
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='select-none fixed right-0 mt-18 mr-6 w-50 h-80 rounded-xl border-1 border-[#2e2e2d] z-11 bg-ggbg/50 backdrop-blur-md'
          >
            <div className='h-full px-8 py-2 pt-1 text-nowrap grid grid-cols-2 grid-rows-6 font-display items-center text-ggwhite'>
              <a href='/' className='col-span-2 flex items-center gap-4.5 transition-opacity hover:opacity-80'>
                <GoHome size='32' />
                <p className='text-ggwhite'>Home</p>
              </a>
              <a href='/about' className='col-span-2 flex items-center gap-5.5 transition-opacity hover:opacity-80'>
                <FaRegBookmark className='ml-0.5' size='26' />
                <p className='text-ggwhite'>About Us</p>
              </a>
              <a href='/team' className='col-span-2 flex items-center gap-5 transition-opacity hover:opacity-80'>
                <MdOutlinePeopleAlt size='30' />
                <p className='text-ggwhite'>Our Team</p>
              </a>
              <a href='/events' className='col-span-2 flex items-center gap-5.5 transition-opacity hover:opacity-80'>
                <TbCalendarStar size='30' />
                <p className='text-ggwhite'>Events</p>
              </a>
              <a href='/gallery' className='col-span-2 flex items-center gap-[24px] transition-opacity hover:opacity-80'>
                <LuGalleryVerticalEnd size='28' />
                <p className='text-ggwhite'>Gallery</p>
              </a>
              <a
                href='https://discord.com/invite/s99axhqQac'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaDiscord size='28' className='text-ggwhite fade-orange ml-7 cursor-pointer'/>
              </a>
              <a
                href='https://www.instagram.com/gatorgaminguf/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size='28' className='text-ggwhite fade-orange ml-3 cursor-pointer'/>
              </a>
            </div>
          </motion.div>      
        }
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar