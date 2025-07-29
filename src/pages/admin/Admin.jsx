import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import Event from './Event'
import Member from './Member'
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

  const [refresh, toggleRefresh] = useState(false)

  const formRef = useRef(null)
  const [eventList, setEventList] = useState([])
  const [eventData, setEventData] = useState({
    title: '',
    location: '',
    date: '',
    time: '',
    link: ''
  })

  const membersRef = useRef(null)
  const [members, setMembers] = useState([])
  const [membersData, setMembersData] = useState({
    name: '',
    position: '',
    hp: '',
    picture: '',
    favoriteGames: '',
    aboutMe: ''
  })

  const lanInfoRef = useRef(null)
  const [lanInfo, setLanInfo] = useState(null)
  const [lanInfoData, setLanInfoData] = useState({
    edition: '',
    dateRange: ''
  })

  const url = 'http://localhost:3000/api/events'

  useEffect(() => {
    const getEvents = async () => {
      try {
        toggleRefresh(false)
        const list = await axios.get(url)
        setEventList(list.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading the events list, more details in the browser console.')
      }
    }

    const getMembers = async () => {
      try {
        toggleRefresh(false)
        const members = await axios.get('http://localhost:3000/api/members')
        setMembers(members.data)
        console.log(members.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading current members, more details in the browser console.')
      }
    }

    const getLanInfo = async () => {
      try {
        toggleRefresh(false)
        const item = await axios.get('http://localhost:3000/api/laninfo')
        setLanInfo(item.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading gatorlan info, more details in the browser console.')
      }
    }

    getEvents()
    getMembers()
    getLanInfo()
  }, [refresh])

  const handleChange = (event) => {
    event.preventDefault()
    setEventData(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const handleMembersChange = (event) => {
    event.preventDefault()
    setMembersData(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const handleLTIChange = (event) => {
    event.preventDefault()
    setLanInfoData(previous => ({
      ...previous,
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

  const handleSubmitMember = async (event) => {
    try {
      event.preventDefault()
      await axios.post('http://localhost:3000/api/members', membersData)
      setMembersData({
        name: '',
        position: '',
        hp: '',
        picture: '',
        favoriteGames: '',
        aboutMe: ''
      })
      membersRef.current.reset()
      toggleRefresh(true)
    } catch (error) {
      console.log('There was an error trying to add a new member:', error)
    }
  }

  const handleSubmitText = async (event) => {
    try {
      event.preventDefault()
      await axios.post('http://localhost:3000/api/laninfo', lanInfoData)
      setLanInfoData({
        edition: '',
        dateRange: ''
      })
      lanInfoRef.current.reset()
      toggleRefresh(true)
    } catch (error) {
      console.log(error)
      alert('Failure to submit event. Error:', error)
    }
  }

  return (
    <div className='relative py-30 flex flex-col gap-15 items-center w-screen h-fit'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
        <div className='w-100 h-fit'>
          <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Posted Events:</p>
          <div className='flex flex-col'>
            {eventList.length === 0 && <p className='font-display'>No events posted!</p>}
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
      <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
        <div className='w-100 h-fit'>
          <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Current E-Board:</p>
          <div className='flex flex-col'>
            {members.length === 0 && <p className='font-display text-ggwhite'>No members found, try adding some!</p>}
            {members.length !== 0 && members.map(member => (
              <Member
                key={member._id}
                id={member._id}
                name={member.name} 
                position={member.position}
                hp={member.hp}
                favoriteGames={member.favoriteGames}
                toggleRefresh={toggleRefresh}
              />
            ))}
          </div>
        </div>
        <div className='md:w-60 h-fit px-3 pt-2 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'>
          <p className='font-display text-ggorange pb-2'>Add a new member:</p>
          <form className='flex flex-col' ref={membersRef} onSubmit={handleSubmitMember}>
            <input className='font-display placeholder-[#999] focus:outline-none' name='name' placeholder="Name" onChange={handleMembersChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' name='position' placeholder="Position" onChange={handleMembersChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' name='hp' placeholder="HP" onChange={handleMembersChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' name='picture' placeholder="Photo (Google Cloud link)" onChange={handleMembersChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' name='favoriteGames' placeholder="Favorite Game(s)" onChange={handleMembersChange} required/>
            <input className='font-display placeholder-[#999] focus:outline-none' maxLength='140' name='aboutMe' placeholder="About Me (<140 characters)" onChange={handleMembersChange} required/>
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
      <div className='w-100 md:w-170 flex flex-col md:flex-row gap-8 md:gap-13.5 justify-between'>
        <div>
          <p className='text-2xl font-display text-ggwhite pb-3'>GatorLAN Information:</p>
          <p className='text-md font-display text-ggwhite'>Currently displayed edition: <span className='text-ggorange font-mono pl-1'>{lanInfo?.edition}</span></p>
          <p className='text-md font-display text-ggwhite'>Currently displayed date range: <span className='text-ggorange font-mono pl-1'>{lanInfo?.dateRange}</span></p>
        </div>
        <div className=''>
          <form className='flex flex-col p-2 pb-3 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]' onSubmit={handleSubmitText} ref={lanInfoRef}>
            <p className='font-display text-ggorange pb-2 self-start pl-1 md:pl-0 md:self-center'>Change GatorLAN dates:</p>
            <input className='ml-1 font-display placeholder-[#999] focus:outline-none' name='edition' placeholder="Edition" onChange={handleLTIChange} required/>
            <input className='ml-1 font-display placeholder-[#999] focus:outline-none' name='dateRange' placeholder='Dates (ex. "May 1-4")' onChange={handleLTIChange} required/>
            <motion.button
              whileHover={{
                backgroundColor: 'rgb(244, 126, 32, 0.6)',
                transition: { duration: 0.3 },
              }}
              className='font-display mt-2 h-8 hover:cursor-pointer w-full self-center px-3 rounded-md'
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