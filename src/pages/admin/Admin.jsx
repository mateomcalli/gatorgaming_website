import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import AdminEvent from './AdminEvent'
import { motion } from 'framer-motion'

const Admin = () => {

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:3000/api/auth', { withCredentials: true })
      } catch (error) { 
        console.error(error)
        window.location.href = '/login'
      }
    }
    checkAuth()
  }, [])

  const formRef = useRef(null)
  const [eventList, setEventList] = useState([])
  const [refresh, toggleRefresh] = useState(false)
  const [eventData, setEventData] = useState(
    {
      title: '',
      location: '',
      date: '',
      time: '',
      link: ''
    }
  )


  const url = 'http://localhost:3000/api/events'

  useEffect(() => {
    const getEvents = async () => {
      try {
        toggleRefresh(false)
        const list = await axios.get(url)
        setEventList(list.data)
      } catch (error) {
        console.log('Error:', error)
        alert('There was an error loading the events list, more details in the browser console.')
      }
    }
    getEvents()
  }, [refresh])

  const handleChange = (event) => {
    event.preventDefault()
    setEventData(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const [year, month, day] = eventData.date.split('-').map(Number)
      const expiryDate = new Date(year, month - 1, day + 1)
      
      const finalEventData = {
        ...eventData,
        expiryDate
      }

      await axios.post(url, finalEventData)
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
      console.log(error)
      alert('Failure to submit event. Error:', error)
    }
  }

  return (
    <div className='relative pt-30 flex flex-col items-center w-screen h-screen'>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='w-100 h-fit md:px-3'>
          <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Posted Events</p>
          <div className='flex flex-col'>
            {eventList.length === 0 && <p className='font-display'>no events posted</p>}
            {eventList.length !== 0 && eventList.map(event => (
              <AdminEvent
                key={event.id}
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
        <div className='md:w-60 h-fit px-3 pt-2 mt-[40px] rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'>
          <p className='font-display text-ggorange pb-2'>Add a new event:</p>
          <form className='flex flex-col' ref={formRef} onSubmit={handleSubmit}>
            <input className='font-display placeholder-[#999] focus:outline-none' name='title' placeholder="Title" onChange={handleChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' name='location' placeholder="Location" onChange={handleChange} required/>
            <input className='font-display focus:outline-none' type='date' name='date' onChange={handleChange} required/>
            <input type='time' name='time' onChange={handleChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' placeholder='Instagram link' name='link' onChange={handleChange} required/>
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
    </div>
  )
}

export default Admin