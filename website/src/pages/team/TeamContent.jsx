import CardFront from "../../components/CardFront"
import CardBack from "../../components/CardBack"
import Card from "../../components/Card"
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useDrag } from '@use-gesture/react'
import { useRef, useState } from 'react'

const TeamContent = () => {
  const scrollRef = useRef(null)

  const members = [
    {name: 'Amelia Reeves', position: 'Co-President'},
    {name: 'Matthew Grimaldi', position: 'Co-President'},
    {name: 'Wyatt Powell', position: 'Vice President'},
    {name: 'Kaiden Joy', position: 'Treasurer'},
    {name: 'Zack Philips', position: 'Secretary'},
    {name: 'Evelyn Perez', position: 'Outreach Lead'}
  ]

  const bind = useDrag(({ delta: [dx] }) => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.getScrollElement()
      if (scrollElement) {
        scrollElement.scrollLeft -= dx
      }
    }
  })

  return (
    <div className='relative pt-30 lg:pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <p className='relative text-4xl text-ggwhite font-display pb-10'>Meet our officers!</p>
      <div className='relative'>
        <SimpleBar className='h-115 w-screen lg:w-259.5 max-w-259.5' ref={scrollRef}>
          <div className='relative touch-none px-10 lg:px-5 flex gap-x-12 w-fit select-none cursor-grab active:cursor-grabbing' {...bind()}>
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
        <div className='absolute left-0 top-0 h-full w-6 bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
        <div className='absolute right-0 top-0 h-full w-10 bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none z-2'></div>
      </div>
    </div>
  )
}

export default TeamContent