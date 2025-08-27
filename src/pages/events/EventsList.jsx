import { IoIosPin } from 'react-icons/io'
import { TbClock } from 'react-icons/tb'
import { TfiArrowTopRight } from 'react-icons/tfi'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const EventsList = ({ eventList }) => {
  const specificMQ = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

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
    <div className='relative z-2'>
      <div className='flex flex-col pt-5 lg:pt-0 items-start m-auto w-fit md:min-h-120 z-2'>
        <p className='text-[28px] pb-4 text-ggwhite font-display'>Upcoming Events</p>
        {eventList.length === 0 && 
          <p className='font-display'>no upcoming events — stay tuned!</p>
        }
        {eventList.length !== 0 && 
          eventList.map(event => {
            const { month, dayNumber, year, time } = eventDateFormatter(event.date, event.time)
            const largerText = event.title.length <= 16 
            return (
              <div key={event.id} className='flex relative pb-8 gap-0 w-full lg:w-auto lg:gap-4 z-2'>
                <motion.a
                  href={event.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:cursor-pointer absolute top-0 right-0 mt-1 z-3'
                  whileHover={{ x: 6, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <TfiArrowTopRight size='32'/>
                </motion.a>
                {!specificMQ && 
                  <p className='lg:visible text-[40px] -mt-1 text-ggorange pr-4 lg:pr-0 font-pixels'>
                    {dayNumber}
                  </p>
                }
                <div className='relative z-2 flex items-start flex-col text-ggwhite font-display' key={event.id}>
                  <p className='text-xl text-ggwhite font-display'>{specificMQ && dayNumber} {month} {year}</p>
                  <p className={largerText ? `text-[20px] text-ggorange font-display` : `text-[18px] text-ggorange font-display`}>{event.title}</p>
                  <div className='flex'>
                    <IoIosPin size='20' className='text-ggorange mt-0.5'/>
                    <p className='text-wrap max-w-30 text-ggwhite font-display ml-0.5 mr-2'>{event.location}</p>
                    <TbClock size='20' className='text-ggorange mt-0.5'/>
                    <p className='text-ggwhite font-display ml-1 pr-10'>{time}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default EventsList