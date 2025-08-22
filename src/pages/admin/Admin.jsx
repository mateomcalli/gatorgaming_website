import axios from 'axios'
import { useState, useEffect } from 'react'
import EventsManager from './EventsManager'
import MembersManager from './MembersManager'
import LanInfoManager from './LanInfoManager'
import GalleryManager from './GalleryManager'

const Admin = () => {
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${BASE_URL}/api/auth`, { withCredentials: true })
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
      <GalleryManager refresh={refresh} toggleRefresh={toggleRefresh}/>
      <LanInfoManager refresh={refresh} toggleRefresh={toggleRefresh}/>
      <MembersManager refresh={refresh} toggleRefresh={toggleRefresh}/>
    </div>
  )
}

export default Admin