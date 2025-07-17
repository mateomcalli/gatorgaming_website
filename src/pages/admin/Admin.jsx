import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { LuX } from "react-icons/lu";

const Admin = () => {
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
      await axios.post(url, eventData)
      successMessage()
      setEventData({
        title: '',
        location: '',
        date: '',
        time: ''
      })
      formRef.current.reset()
      toggleRefresh(true)
    } catch (error) {

    }
  }

  const handleDelete = async (id, title) => {
    if (confirm(`Are you sure you want to delete this event: ${title}?`)) {
      try {
        await axios.delete(`http://localhost:3000/api/events/${id}`)
        toggleRefresh(true)
      } catch (error) {
        console.log(error)
        alert('Failed to delete the event. Error:', error)
      }
    } return
  }

  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <div className='flex gap-10'>
        <div className='w-100 h-fit px-3'>
          <p className='font-display text-ggorange pb-2'>posted events:</p>
          <div className='flex flex-col gap-3'>
            {eventList.map(event => (
              <div className='p-3 items-center justify-between rounded-xl flex bg-ggbg text-ggwhite drop-shadow-sm drop-shadow-ggorange font-display' key={event.id}>
                <div className='flex-col'>
                  <p>{event.title}</p>
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <a onClick={() => handleDelete(event.id, event.title)} className='cursor-pointer'><LuX size='24'/></a>
              </div>
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
            <button type='submit' className={`w-fit px-2 self-center font-display cursor-pointer mt-3 rounded-4xl border-2 ${showSuccess ? 'border-green-800': 'border-ggorange'}`}>{showSuccess ? 'submitted!' : 'add event!'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin