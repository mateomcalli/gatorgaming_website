import CardFront from "../../components/CardFront"
import CardBack from "../../components/CardBack"
import Card from "../../components/Card"
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useDrag } from '@use-gesture/react'
import { useRef, useState } from 'react'
import SmallCard from "../../components/SmallCard"

const TeamContent = () => {
  const mainScrollRef = useRef(null)
  const subScrollRef = useRef(null)

  const members = [
    {name: 'Amelia Reeves', position: 'Co-President'},
    {name: 'Matthew Grimaldi', position: 'Co-President'},
    {name: 'Wyatt Powell', position: 'Vice President'},
    {name: 'Kaiden Joy', position: 'Treasurer'},
    {name: 'Zack Philips', position: 'Secretary'},
    {name: 'Evelyn Perez', position: 'Outreach Lead'}
  ]

  const designers = [
    {name: 'Mateo McAllister',},
    {name: 'Joyin Ang',},
    {name: 'Colin Mendoza',},
    {name: 'Rhythm Kumar',},
    {name: 'Lucas McAllister',},
    {name: 'Nicolas Boulton',},
    {name: 'Steven Lautenbach'}
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
    <div className='relative pt-30 lg:pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <p className='relative text-4xl text-ggwhite font-display pb-2'>Meet our officers!</p>
      <div className='relative'>
        <SimpleBar className='pt-8 h-124 w-screen lg:w-265 max-w-265' ref={mainScrollRef}>
          <div className='relative px-10 lg:px-5 flex gap-x-15 w-fit select-none cursor-grab active:cursor-grabbing' {...main()}>
            {members.map((member, index) => {
              const [flipped, setFlipped] = useState(false)
              return (
                <Card
                  name={member.name}
                  position={member.position}
                  flipped={flipped}
                  setFlipped={setFlipped}
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
        <SimpleBar className='w-screen lg:w-300 lg:ml-35 xl:ml-0 h-106' ref={subScrollRef}>
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
          <SmallCard name={'Mateo McAllister'}/>
      </div>
    </div>
  )
}

export default TeamContent