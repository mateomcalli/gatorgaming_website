import { useEffect, useState } from 'react'
import EventsList from './EventsList'
import PopulateCalendar from './PopulateCalendar'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const EventsContent = () => {
  const [dateTime, setDateTime] = useState(new Date())
  const [changingMonth, setChangingMonth] = useState(new Date())
  const year = changingMonth.getFullYear()

  useEffect(() => {
    const timeHook = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    
    return () => clearInterval(timeHook)
  }, [])

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // 0-6
  const month = changingMonth.toLocaleString('default', { month: 'long' })

  const handleLeft = () => {
    setChangingMonth(pre => {
      const newMonth = new Date(pre)
      newMonth.setMonth(pre.getMonth() - 1)
      console.log(newMonth.getMonth())
      return newMonth
    })
  }

  const handleRight = () => {
    setChangingMonth(pre => {
      const newMonth = new Date(pre)
      newMonth.setMonth(pre.getMonth() + 1)
      console.log(newMonth.getMonth())
      return newMonth
    })
  }

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <div className='flex flex-col w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300 text-center z-2'>
        <div className='relative'>
          <p className='text-4xl pb-10 text-ggwhite font-display'>Calendar of Events</p>
          <div className='flex gap-x-24 justify-center'>
            <div className='flex flex-col items-center border-2 border-[#1a1a1a] rounded-2xl min-w-105 h-110'>
              <div className='mt-5 flex w-full justify-between px-5 items-center'>
                <button onClick={handleLeft}><IoIosArrowBack size='20'/></button>
                <p className='text-3xl text-ggwhite font-display'>{month} {year}</p>
                <button onClick={handleRight}><IoIosArrowForward size='20'/></button>
              </div>
              <div className='pt-5 pb-4 grid grid-rows-1 grid-cols-7 gap-5'>
                {weekdays.map((day, index) => (
                  <p key={index} className='text-ggwhite text-[17px] font-display'>{day}</p>
                ))}
              </div>
              <PopulateCalendar changingMonth={changingMonth} dateTime={dateTime} year={year}/>
            </div>
            <EventsList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsContent