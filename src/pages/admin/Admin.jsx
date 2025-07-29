import axios from 'axios'
import { useState, useEffect } from 'react'
import EventsManager from './EventsManager'
import MembersManager from './MembersManager'
import LanInfoManager from './LanInfoManager'

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

  return (
    <div className='relative py-30 flex flex-col gap-15 items-center w-screen h-fit'>
      <EventsManager refresh={refresh} toggleRefresh={toggleRefresh}/>
      <MembersManager refresh={refresh} toggleRefresh={toggleRefresh}/>
      <LanInfoManager refresh={refresh} toggleRefresh={toggleRefresh}/>
    </div>
  )
}

export default Admin