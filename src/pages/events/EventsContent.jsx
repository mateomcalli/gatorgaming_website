import { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { motion } from 'framer-motion'
import axios from 'axios'
import EventsList from './EventsList'
import PopulateCalendar from './PopulateCalendar'
import EventsSeparator from '../../components/decorative/EventsSeparator'
import EventSeparatorLines from '../../components/decorative/EventSeparatorLines'

const EventsContent = ({ minLg }) => {
  const [eventList, setEventList] = useState([])
  const [lanInfo, setLanInfo] = useState(null)
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

    const getLanInfo = async () => {
      try {
        const item = await axios.get('http://localhost:3000/api/laninfo')
        setLanInfo(item.data)
      } catch (error) {
        console.log('Error:', error)
        alert('There was an error loading gatorlan info, more details in the browser console.')
      }
    }

    getLanInfo()
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

  const features = ['Tournaments', 'Prizes & Raffles', 'Side Events', 'Panels', 'Arts & Crafts', 'Board Games', 'Streaming', 'and MORE!']
  
  return (
    <div className='overflow-x-hidden relative pt-30 lg:pb-50 flex flex-col gap-y-24 justify-center items-center w-screen min-h-screen'>
      <img className='absolute top-0 min-w-[1200px] pointer-events-none z-0' src='/events/events-top-blur.png'/>
      <div className='ml-4 flex flex-col w-fit text-center z-2'>
        <p className='text-4xl mr-4 pb-8 text-ggwhite font-display'>Calendar of Events</p>
        <div className='flex justify-center flex-col mr-0 sm:mr-8 lg:mr-0 md:flex-row gap-x-16 lg:gap-x-24'>
          <div className='mr-4 sm:mr-0'>
            <div className='flex flex-col m-auto items-center border-2 border-[#1A1A1A] rounded-2xl flex-shrink-0 w-100 sm:w-105 h-100 sm:h-105'>
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
      {/* start of gatorLAN section */}
      <div className='flex relative z-1 w-fit md:w-4/5 lg:w-fit ml-0 lg:ml-16'>
        <img className='absolute min-w-[900px] -top-20 -left-20 lg:left-70 lg:-top-45 pointer-events-none z-0' src='/events/gatorlan-blur.png'/>
        {minLg && 
          <div className='flex flex-col w-130 gap-y-8 z-2'>
            <img className='aspect-auto w-130 rounded-3xl' src='/events/gatorlan2.jpg'/>
            <p className='text-center font-display'>GatorLAN is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris. Join our Discord for more information about this semester's edition!</p>
          </div>
        }
        <div className='flex flex-col gap-y-12 lg:gap-y-20 z-2'>
          {!minLg && <EventsSeparator/>}  
          <div className='text-center'>
            <p className='text-6xl text-ggorange font-semibold font-display'>GatorLAN <span className='italic text-ggwhite'>{lanInfo?.edition}</span></p>
            <p className='text-[24px] pl-1 text-ggwhite font-display'>{lanInfo?.dateRange}</p>
            {!minLg && <p className='text-center font-display md:px-20 px-10 pt-8'>GatorLAN is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco laboris. Join our Discord for more information about this semester's edition!</p>}
          </div>
          <div className='w-100 ml-16 self-center grid gap-y-1.5 grid-cols-2 grid-rows-4'>
            {features.map((feature, i) => (
              <div key={i} className='flex gap-2'>
                <img className='w-6' src='events/gatorgaming-bullet.png'/>
                <p className='text-ggwhite font-display'>{feature}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-around'>
            <div className='flex'>
              <div className='flex flex-col text-center'>
                <p className='text-2xl font-pixels text-ggorange'>900+</p>
                <p className='text-lg font-display text-ggwhite'>Average<br/>Registrations</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col text-center'>
                <p className='text-2xl font-pixels text-ggorange'>30+</p>
                <p className='text-lg font-display text-ggwhite'>Games<br/>Played</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {minLg && <EventSeparatorLines/>}
      {/* start of extralife section */}
      <div className='flex relative z-2 flex-col w-screen items-center lg:w-auto lg:flex-row lg:gap-x-16'>
        <div className='w-110 flex flex-col gap-y-8 justify-center z-2'>
          <img className='absolute right-20 top-10 lg:-top-10 lg:right-70 min-w-[800px] pointer-events-none z-0' src='/events/extra-life-blur.png'/>
          <img className='w-100 self-center pr-6 lg:w-120 lg:ml-0 z-2' src='events/extra-life-logo.png'/>
          <p className='text-pretty text-center font-display px-8 lg:px-0 z-2'>Extra Life is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat conmodo labore.</p>
        </div>
        <img className='w-90 h-65 sm:w-100 sm:h-70 ml-2 lg:w-115 lg:h-80 lg:ml-0 my-10 lg:my-20 rounded-3xl z-2' src='/events/extralife.png'/>
      </div>
    </div>
  )
}

export default EventsContent