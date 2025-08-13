import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Event from './Event'

const EventsManager = ({ refresh, toggleRefresh }) => {
  const formRef = useRef(null)
  const [eventList, setEventList] = useState([])
  const [eventData, setEventData] = useState({
    title: '',
    location: '',
    date: '',
    time: '',
    link: ''
  })

  useEffect(() => {
    const getEvents = async () => {
      try {
        toggleRefresh(false)
        const list = await axios.get('http://localhost:3000/api/events')
        setEventList(list.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading the events list, more details in the browser console.')
      }
    }
    getEvents()
  }, [refresh])

  const handleChange = (event) => {
    event.preventDefault()
    setEventData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmitEvent = async (event) => {
    event.preventDefault()
    try {
      const [year, month, day] = eventData.date.split('-').map(Number)
      const expiryDate = new Date(year, month - 1, day + 1)

      const finalEventData = {
        ...eventData,
        expiryDate
      }

      await axios.post('http://localhost:3000/api/events', finalEventData)
      setEventData({
        title: '',
        location: '',
        date: '',
        time: '',
        link: ''
      })
      formRef.current.reset()
      toggleRefresh(true)
    } catch (error) {
      console.error(error)
      alert('Failure to submit event. Error: ' + error)
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
      <div className='w-100 h-fit'>
        <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Posted Events:</p>
        <div className='flex flex-col'>
          {eventList.length === 0 && <p className='pl-3 font-display'>No events posted!</p>}
          {eventList.length !== 0 && eventList.map(event => (
            <Event
              key={event._id}
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date}
              time={event.time}
              toggleRefresh={toggleRefresh}
            />
          ))}
        </div>
      </div>

      <div className='md:w-60 h-fit px-3 pt-2 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'>
        <p className='font-display text-ggorange pb-2'>Add a new event:</p>
        <form className='flex flex-col' ref={formRef} onSubmit={handleSubmitEvent}>
          <input className='font-display placeholder-[#999] focus:outline-none' name='title' placeholder="Title" maxLength='30' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' name='location' placeholder="Location" onChange={handleChange} required />
          <input className='font-display focus:outline-none' type='date' name='date' onChange={handleChange} required />
          <input type='time' name='time' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' placeholder='Instagram link' name='link' onChange={handleChange} required />
          <motion.button
            whileHover={{
              backgroundColor: 'rgb(244, 126, 32, 0.6)',
              transition: { duration: 0.3 },
            }}
            className='font-display mt-2 mb-3 hover:cursor-pointer w-full self-center px-3 py-1 rounded-md'
            type='submit'
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default EventsManager