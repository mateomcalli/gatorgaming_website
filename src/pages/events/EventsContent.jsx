import { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { motion } from 'framer-motion'
import axios from 'axios'
import EventsList from './EventsList'
import PopulateCalendar from './PopulateCalendar'

const EventsContent = () => {
  const [eventList, setEventList] = useState([])
  const url = 'http://localhost:3000/api/events'

  const [dateTime, setDateTime] = useState(new Date())
  const [changingMonth, setChangingMonth] = useState(new Date())
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const month = changingMonth.toLocaleString('default', { month: 'long' })
  const year = changingMonth.getFullYear()

  useEffect(() => {
    const timeHook = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    
    return () => clearInterval(timeHook)
  }, [])

  useEffect(() => {
    const getEvents = async () => {
      try {
        const list = await axios.get(url)
        setEventList(list.data)
      } catch (error) {
        console.log('Error:', error)
        alert('There was an error loading the events list, more details in the browser console.')
      }
    }
    getEvents()
  }, [])

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

  let eventDateStrings = []
  eventList.map(event => {
    eventDateStrings.push(event.date)
  })

  return (
    <div className='relative pt-30 lg:pb-70 flex justify-center items-center w-screen min-h-screen'>
      <div className='flex flex-col w-screen lg:w-fit text-center z-2'>
        <p className='text-4xl pb-10 text-ggwhite font-display'>Calendar of Events</p>
        <div className='mr-3 md:mr-0 flex flex-col md:flex-row lg:gap-x-24 justify-center'>
          <div className='md:pt-6 lg:pt-0'>
            <div className='flex flex-col m-auto items-center border-2 border-[#1a1a1a] rounded-2xl min-w-105 w-105 h-105'>
              <div className='mt-5 flex w-full justify-between px-5 items-center'>
                <motion.button
                  whileTap={{
                    scale: 1.3,
                    transition: { duration: 0.1 }
                  }}
                  className='pr-2 pl-1 hover:cursor-pointer'
                  onClick={handleLeft}
                >
                  <IoIosArrowBack size='20'/>
                </motion.button>
                <p className='text-3xl text-ggwhite font-display'>{month} {year}</p>
                <motion.button
                  whileTap={{
                    scale: 1.3,
                    transition: { duration: 0.1 }
                  }}
                  className='pl-2 pr-1 hover:cursor-pointer'
                  onClick={handleRight}
                >
                  <IoIosArrowForward size='20'/>
                </motion.button>
              </div>
              <div className='pt-5 pb-4 grid grid-rows-1 grid-cols-7 gap-5'>
                {weekdays.map((day, index) => (
                  <p key={index} className='text-ggwhite text-[17px] font-display'>{day}</p>
                ))}
              </div>
              <PopulateCalendar eventDateStrings={eventDateStrings} changingMonth={changingMonth} year={year} dateTime={dateTime}/>
            </div>
          </div>
          <EventsList eventList={eventList}/>
        </div>
      </div>
    </div>
  )
}

export default EventsContent