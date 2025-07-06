import { motion } from 'framer-motion'
import { useState } from 'react'
import OrangeButton from '../../components/OrangeButton'

const AffiliatedClubs = ({ minLg }) => {
  const clubs = [
    {
      name: 'GatorVR',
      image: 'about/gatorvr.png',
      text: 'GatorVR is the University of Florida’s virtual reality club! Attend game nights & special events for the chance to participate in off-campus tournaments!',
      id: 0
    },
    {
      name: 'U.R.G.E',
      image: 'about/urge.png',
      text: 'U.R.G.E, or the University Rhythm Game Enthusiasts, are the official UF club for rhythm games. Join us for weekly open play and playtesting new games!',
      id: 1
    },
    {
      name: 'GatorJam',
      image: 'about/gatorjam.png',
      text: 'UF’s official student-run Minecraft server! Build iconic locations like The Swamp, play with other students, and explore the world with 100+ members!',
      id: 2
    }
  ]

  return (
    <>
      <div className='mt-25 flex flex-col justify-center min-h-fit gap-y-8 w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
        <p className='text-4xl text-ggwhite font-display text-center'>Affiliated Clubs:</p>
          <div className='flex flex-col gap-y-5 items-center md:pl-16 md:grid md:grid-cols-2 md:grid-rows-2 lg:pl-0 lg:flex lg:gap-y-0 lg:flex-row justify-around lg:items-start text-center min-h-fit w-full'>
            {clubs.map(club => {
              const [renderInfo, setRenderInfo] = useState(false)

              return (
                <div className='relative w-fit h-fit flex flex-col gap-y-2'>
                  <p className='text-2xl text-ggwhite font-display'>
                    {club.name}
                  </p>
                  <div 
                    className='relative rounded-3xl drop-shadow-md drop-shadow-ggorange'
                    onMouseEnter={() => setRenderInfo(true)}
                    onMouseLeave={() => setRenderInfo(false)}                  
                  >
                    <div className='w-65 h-65 xl:w-75 xl:h-75 rounded-3xl'>
                      <motion.img
                        animate={{ opacity: renderInfo ? 0 : 1 }}
                        className={`absolute top-0 left-0 z-2 w-full h-full rounded-3xl ${renderInfo ? 'pointer-events-none' : 'pointer-events-auto'}`} src={club.image}
                      />
                      <div className='absolute top-0 left-0 w-65 h-65 xl:w-75 xl:h-75 rounded-3xl bg-ggbg z-1'>
                        <div className='p-4 flex flex-col justify-start xl:justify-center items-center rounded-3xl gap-y-5 h-full w-full'>
                          <p className='text-lg text-ggwhite font-display'>{club.text}</p>
                          <OrangeButton text='Discord'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        {/* {!minLg &&
          <div className='test-green flex justify-around text-center min-h-fit w-full'>
            {clubs.map(club => (
              <div>

              </div>
            ))}
          </div>
        } */}
      </div>
    </>
  )
}

export default AffiliatedClubs