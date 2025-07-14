import axios from 'axios'
import { useState } from 'react'

const Admin = () => {
  const [eventData, setEventData] = useState(
    {
      title: '',
      location: '',
      date: '',
      time: '',
    }
  )

  const url = 'http://localhost:3000/api/events'

  const handleChange = (event) => {
    event.preventDefault()
    setEventData(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
    console.log(eventData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(url, )
  }
  return (
    <div className='relative pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <div className='w-60 px-3 pt-2 pb-5 rounded-xl bg-ggbg drop-shadow-sm drop-shadow-ggorange'>
        <p className='font-display text-ggorange pb-2'>add a new event:</p>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input className='font-display focus:outline-none' name='title' placeholder="title" onChange={handleChange}/>
          <input className='font-display focus:outline-none' name='location' placeholder="location" onChange={handleChange}/>
          <input className='font-display focus:outline-none' type='date' name='date' onChange={handleChange}/>
          <input type='time' name='time' onChange={handleChange}/>
          <button type='submit' className='w-fit px-2 self-center font-display cursor-pointer mt-3 rounded-4xl border-2 border-ggorange'>add event!</button>
        </form>
      </div>
    </div>
  )
}

export default Admin