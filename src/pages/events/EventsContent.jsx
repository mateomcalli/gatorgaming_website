import { useEffect, useState } from 'react'
import EventsList from './EventsList'
import PopulateCalendar from './PopulateCalendar'

const EventsContent = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timeHook = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    
    return () => clearInterval(timeHook)
  }, [])

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // 0-6
  const month = dateTime.toLocaleString('default', { month: 'long' })

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <div className='flex flex-col w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300 text-center z-2'>
        <div className='relative'>
          <p className='text-4xl pb-10 text-ggwhite font-display'>Calendar of Events</p>
          <div className='flex gap-x-24 justify-center'>
            <div className='flex flex-col items-center border-2 border-[#1a1a1a] rounded-2xl min-w-105 h-110'>
              <p className='pt-5 text-3xl text-ggwhite font-display'>{month} {dateTime.getFullYear()}</p>
              <div className='pt-5 pb-4 grid grid-rows-1 grid-cols-7 gap-5'>
                {weekdays.map((day, index) => (
                  <p key={index} className='text-ggwhite text-[17px] font-display'>{day}</p>
                ))}
              </div>
              <PopulateCalendar dateTime={dateTime}/>
            </div>
            <EventsList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsContent