import { useState } from 'react'
import AnimatedBurger from './AnimatedBurger'

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
          className="w-fit text-3xl flex justify-end gap-4"
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <AnimatedBurger isNavOpen={isNavOpen}/>
        </div>
      </div>
      {isNavOpen && 
        <div className='border-1 border-[#2e2e2d] fixed bg-ggbg mt-20 w-screen h-20 z-2'>
          hello
        </div>      
      }
    </>
  )
}

export default MobileNavbar