import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import AdminEvent from './AdminEvent'

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
  const [showSuccess, setShowSuccess] = useState(false)
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

  const successMessage = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, '1500')
  }

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
      successMessage()
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
      <div className='flex gap-10'>
        <div className='w-100 h-fit px-3'>
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
              />
            ))}
          </div>
        </div>
        <div className='w-60 h-fit px-3 pt-2 pb-5 mt-[31px] rounded-xl bg-ggbg drop-shadow-sm drop-shadow-ggorange'>
          <p className='font-display text-ggorange pb-2'>add a new event:</p>
          <form className='flex flex-col' ref={formRef} onSubmit={handleSubmit}>
            <input className='font-display focus:outline-none' name='title' placeholder="title" onChange={handleChange} required/>
            <input className='font-display focus:outline-none' name='location' placeholder="location" onChange={handleChange} required/>
            <input className='font-display focus:outline-none' type='date' name='date' onChange={handleChange} required/>
            <input type='time' name='time' onChange={handleChange} required/>
            <input className='font-display focus:outline-none' placeholder='instagram link' name='link' onChange={handleChange} required/>
            <button type='submit' className={`w-fit px-2 self-center font-display cursor-pointer mt-3 rounded-4xl border-2 ${showSuccess ? 'border-green-800': 'border-ggorange'}`}>{showSuccess ? 'submitted!' : 'add event!'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin