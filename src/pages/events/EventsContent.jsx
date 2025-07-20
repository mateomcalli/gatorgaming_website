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

  const features = ['Spectator Area', 'Prizes & Raffles', 'Side Events', 'Panels', 'Arts & Crafts', 'Board Games', 'Streaming', 'And MORE!']
  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col gap-y-32 justify-center items-center w-screen min-h-screen'>
      <div className='red flex flex-col w-fit text-center z-2'>
        <p className='text-4xl pb-8 text-ggwhite font-display'>Calendar of Events</p>
        <div className='flex justify-center flex-col ml-3 lg:mr-0 md:flex-row gap-x-16 lg:gap-x-24'>
          <div className=''>
            <div className='flex flex-col m-auto items-center border-2 border-[#1a1a1a] rounded-2xl flex-shrink-0 w-105 h-105'>
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
      <div className='flex w-fit gap-x-24'>
        <div className='flex flex-col w-120 gap-y-8'>
          <img className='aspect-auto w-120 rounded-3xl' src='/events/gatorlan1.png'/>
          <p className='text-center font-display'>GatorLAN is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='red flex flex-col'>
          <div>
            <p className='text-6xl text-ggorange font-semibold font-display'>GatorLAN <span className='italic text-ggwhite'>16</span></p>
            <p className='text-[24px] pl-1 text-ggwhite font-display'>September 13-16</p>
          </div>
          <div className='flex'>
            <img className='w-6' src='events/gatorgaming-bullet.png'/>
            <p>Spectator Area</p>
            <img className='w-6' src='events/gatorgaming-bullet.png'/>
            <p>Spectator Area</p>
            <img className='w-6' src='events/gatorgaming-bullet.png'/>
            <p>Spectator Area</p>
            <img className='w-6' src='events/gatorgaming-bullet.png'/>
            <p>Spectator Area</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsContent