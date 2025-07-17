import { useState, useEffect } from 'react'
import axios from 'axios'
import { IoIosPin } from "react-icons/io"
import { TbClock } from "react-icons/tb"
import { TfiArrowTopRight } from "react-icons/tfi"

const EventsList = () => {
  const url = 'http://localhost:3000/api/events'
  const [eventList, setEventList] = useState([])

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

  const eventDateFormatter = (rawDate, rawTime) => {
    const isoString = `${rawDate}T${rawTime}:00`
    const eventDate = new Date(isoString)
    const month = eventDate.toLocaleString('default', { month: 'long' })
    const dayNumber = eventDate.getDate()
    const year = eventDate.getFullYear()
    const time = eventDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
    return { month, dayNumber, year, time }
  }

  return (
    <div className='flex flex-col items-start min-w-fit min-h-120'>
      <p className='text-[28px] pb-4 text-ggwhite font-display'>Upcoming Events</p>
      {eventList.map(event => {
        const { month, dayNumber, year, time } = eventDateFormatter(event.date, event.time)
        return (
          <div className='flex relative pb-8 gap-4 self-end'>
            <TfiArrowTopRight size='32' className='absolute top-0 right-0 mt-1'/>
            <p className='text-[40px] -mt-1 text-ggorange font-pixels'>{dayNumber}</p>
            <div className='flex items-start flex-col text-ggwhite font-display' key={event.id}>
              <p className='text-xl text-ggwhite font-display'>{month} {year}</p>
              <p className='text-[18px] text-ggorange font-display'>{event.title}</p>
              <div className='flex'>
                <IoIosPin size='20' className='text-ggorange mt-0.5'/>
                <p className='text-ggwhite font-display ml-0.5 mr-2'>{event.location}</p>
                <TbClock size='20' className='text-ggorange mt-0.5'/>
                <p className='text-ggwhite font-display ml-1 pr-10'>{time}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventsList