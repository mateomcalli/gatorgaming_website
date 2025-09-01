import Card from '../../components/cards/Card'
import SmallCard from '../../components/cards/SmallCard'
import { motion } from 'framer-motion'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { useDrag } from '@use-gesture/react'
import { useRef } from 'react'


const TeamContent = ({ members }) => {
  const mainScrollRef = useRef(null)

  const designers = [
    {name: 'Colin Mendoza', picture: '/people/colin-m.webp', role: 'Project Manager'},
    {name: 'Joyin Ang', picture: '/people/joyin-a.webp', role: 'Web Designer'},
    {name: 'Lucas McAllister', picture: '/people/lucas-m.png', role: 'Web Designer'},
    {name: 'Mateo McAllister', picture: '/people/mateo-m.png', role: 'Web Designer Site Developer'},
    {name: 'Nicolas Boulton', picture: '/people/nico-b.webp', role: 'Web Designer'},
    {name: 'Rhythm Kumar', picture: '/people/rhythm-k.webp', role: 'Web Designer'},
    {name: 'Steven Lautenbach', picture: '/people/steven-l.png', role: 'Web Designer'}
  ]

  const main = useDrag(({ delta: [dx] }) => {
    if (mainScrollRef.current) {
      const mainScrollElement = mainScrollRef.current.getScrollElement()
      if (mainScrollElement) {
        mainScrollElement.scrollLeft -= dx
      }
    }
  })

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <p className='relative text-4xl text-ggwhite font-display pb-2'>Meet our officers!</p>
      <div className='relative'>
        <SimpleBar autoHide={false} scrollbarMaxSize={700} className='pt-8 h-124 w-screen lg:w-265 max-w-265' ref={mainScrollRef}>
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: [0, -130, 0] }}
            transition={{
              duration: 1,
              delay: 0.5
            }}
            className='relative px-10 lg:px-5 flex gap-x-15 w-fit select-none cursor-grab active:cursor-grabbing'
            {...main()}
          >
            {members.map((member, index) => {
              return (
                <Card
                  name={member.name}
                  position={member.position}
                  hp={member.hp}
                  picture={member.picture}
                  favoriteGames={member.favoriteGames}
                  aboutMe={member.aboutMe}
                  key={index}
                />
            )})}
          </motion.div>
        </SimpleBar>
        <div className='absolute left-0 top-8 h-105 w-6 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
        <div className='absolute right-0 top-8 h-105 w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
      </div>
      <div className='flex flex-col relative mt-20 w-screen lg:w-300 cursor-grab active:cursor-grabbing'>
        <p className='text-2xl text-ggwhite font-display pb-10 self-center'>GUD Website Team:</p>
        <Splide 
          extensions={{ AutoScroll }}
          options={{
            arrows: false,
            pagination: false,
            updateOnMove: false,
            fixedWidth: '150px',
            drag: 'free',
            snap: false,
            gap: '150px',
            type: 'loop',
            padding: {left: '48px'},
            flickPower: 0.000001,
            autoScroll: {
              pauseOnHover: true,
              speed: 1
            }
          }}
        >
          {designers.map(designer => (
            <SplideSlide>
              <SmallCard name={designer.name} picture={designer.picture} role={designer.role}/>
            </SplideSlide>
          ))}
        </Splide>
        <div className='absolute left-0 top-18 h-95 w-10 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'/>
        <div className='absolute right-0 top-18 h-95 w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'/>
      </div>

      {/* designers sect */}
      
      {/* <div className='relative flex flex-col items-center mt-20'>
        <p className='relative text-2xl italic text-ggwhite font-display pb-8'>designers:</p>
        <SimpleBar autoHide={false} scrollbarMaxSize={500} className='w-screen lg:w-300 lg:ml-35 xl:ml-0 h-106' ref={subScrollRef}>
          <div className='relative px-10 lg:px-5 flex gap-x-8 w-fit select-none cursor-grab active:cursor-grabbing' {...sub()}>
            {designers.map((designer, index) => (
              <SmallCard name={designer.name} picture={designer.picture} key={index}/>
            ))}
          </div>
        </SimpleBar>
        <div className='absolute left-0 top-16 h-95 w-6 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'/>
        <div className='absolute right-0 top-16 h-95 w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'/>
      </div> */}

      {/* dev sect */}

      {/* <div className='relative flex flex-col items-center mt-20'>
        <p className='relative text-2xl italic text-ggwhite font-display pb-8'>developer:</p>
          <SmallCard name={'Mateo McAllister'} picture={'/people/mateo-m.png'}/>
      </div> */}
    </div>
  )
}

export default TeamContent