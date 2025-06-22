import { useState } from 'react'
import AnimatedBurger from './AnimatedBurger'
import { GoHome } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbCalendarStar } from "react-icons/tb";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { FaDiscord, FaInstagram } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = ({setSelected}) => {
  const [isNavOpen, setisNavOpen] = useState(false)

  return (
    <>
      <div className="px-6 border-b-1 border-[#2e2e2d] fixed justify-between items-center w-screen top-0 flex h-20 bg-ggbg font-display z-10">
        <div className="w-fit flex-shrink-0">
          <img
            onClick={() => setSelected('Home')}
            className="w-16"
            src="https://i.imgur.com/n2RSSOQ.png"
          ></img>
        </div>
        <div 
          className="relative w-fit text-3xl flex justify-end gap-4"
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
          className='absolute right-0 mt-18 mr-8 w-50 h-80 rounded-xl border-1 border-[#2e2e2d] z-11 bg-ggbg'>
          <div className='h-full px-8 py-2 pt-1 text-nowrap grid grid-cols-2 grid-rows-6 font-display items-center text-ggwhite'>
            <GoHome size='32' />
            <a className='hover:cursor-pointer'><p className='text-ggwhite w-fit -ml-3'>Home</p></a>
            <FaRegBookmark size='26' />
            <p className='text-ggwhite w-fit -ml-3'>About Us</p>
            <MdOutlinePeopleAlt size='30' className='ml-0.5' />
            <p className='text-ggwhite w-fit -ml-3'>Our Team</p>
            <TbCalendarStar size='30' />
            <p className='text-ggwhite w-fit -ml-3'>Events</p>
            <LuGalleryVerticalEnd size='28' className='ml-0.5' />
            <p className='text-ggwhite sw-fit -ml-3'>Gallery</p>
            <FaDiscord size='28' className='text-ggwhite fade-orange ml-7'/>
            <FaInstagram size='28' className='text-ggwhite fade-orange ml-3'/>
          </div>
        </motion.div>      
        }
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar