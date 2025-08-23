import Card from "../../components/cards/Card"
import SmallCard from "../../components/cards/SmallCard"
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useDrag } from '@use-gesture/react'
import { useRef } from 'react'


const TeamContent = ({ members }) => {
  const mainScrollRef = useRef(null)
  const subScrollRef = useRef(null)

  const designers = [
    {name: 'Colin Mendoza', picture: '/people/colin-m.png'},
    {name: 'Joyin Ang', picture: '/people/joyin-a.png'},
    {name: 'Lucas McAllister', picture: '/people/lucas-m.png'},
    {name: 'Mateo McAllister', picture: '/people/mateo-m.png'},
    {name: 'Nicolas Boulton', picture: '/people/nico-b.png'},
    {name: 'Rhythm Kumar', picture: '/people/rhythm-k.png'},
    {name: 'Steven Lautenbach', picture: '/people/steven-l.png'}
  ]

  const main = useDrag(({ delta: [dx] }) => {
    if (mainScrollRef.current) {
      const mainScrollElement = mainScrollRef.current.getScrollElement()
      if (mainScrollElement) {
        mainScrollElement.scrollLeft -= dx
      }
    }
  })

  const sub = useDrag(({ delta: [dx] }) => {
    if (subScrollRef.current) {
      const subScrollElement = subScrollRef.current.getScrollElement()
      if (subScrollElement) {
        subScrollElement.scrollLeft -= dx
      }
    }
  })

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <p className='relative text-4xl text-ggwhite font-display pb-2'>Meet our officers!</p>
      <div className='relative'>
        <SimpleBar autoHide={false} scrollbarMaxSize={700} className='pt-8 h-124 w-screen lg:w-265 max-w-265' ref={mainScrollRef}>
          <div className='relative px-10 lg:px-5 flex gap-x-15 w-fit select-none cursor-grab active:cursor-grabbing' {...main()}>
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
          </div>
        </SimpleBar>
        <div className='absolute left-0 top-8 h-105 w-6 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
        <div className='absolute right-0 top-8 h-105 w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
      </div>
      <div className='relative flex flex-col items-center mt-20'>
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
      </div>
      <div className='relative flex flex-col items-center mt-20'>
        <p className='relative text-2xl italic text-ggwhite font-display pb-8'>developer:</p>
          <SmallCard name={'Mateo McAllister'} picture={'/people/mateo-m.png'}/>
      </div>
    </div>
  )
}

export default TeamContent