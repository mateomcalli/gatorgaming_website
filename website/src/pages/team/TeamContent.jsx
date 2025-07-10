import Card from "../../components/Card"
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useDrag } from '@use-gesture/react'
import { useRef } from 'react'

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
      <SimpleBar className='h-115 max-w-259.5' ref={scrollRef}>
        <div className={`relative px-80 sm:px-60 md:px-45 lg:px-5 flex gap-x-12 w-fit select-none cursor-grab active:cursor-grabbing`} {...bind()}>
          {members.map((member, index) => (
            <Card key={index} name={member.name} position={member.position}/>
          ))}
        </div>
      </SimpleBar>
    </div>
  )
}

export default TeamContent