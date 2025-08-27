import { useMediaQuery } from 'react-responsive'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './pages/home/Layout'
import Hero from './pages/home/Hero'
import HomeContent from './pages/home/HomeContent'
import BlurOne from './bgblurs/BlurOne'
import AboutContent from './pages/about/AboutContent'
import TeamContent from './pages/team/TeamContent'
import EventsContent from './pages/events/EventsContent'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import Gallery from './pages/gallery/Gallery'

const App = () => {
  const maxSm = useMediaQuery({ maxWidth: 767 })
  const minMd = useMediaQuery({ minWidth: 768 })
  const maxMd = useMediaQuery({ maxWidth: 1023 })
  const isMobile = useMediaQuery({ maxWidth: 920 })
  const minXl = useMediaQuery({ minWidth: 1280 })
  const minLg = useMediaQuery({ minWidth: 1024 })

  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  const [members, setMembers] = useState([])
  const [eventList, setEventList] = useState([])
  const [albumsList, setAlbumsList] = useState([])
  const [emptyBool, setEmptyBool] = useState(false)
  const [lanInfo, setLanInfo] = useState(null)

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/members`)
        setMembers(response.data)
      } catch (error) {
        console.error('Error: ', error)
        alert('There was an error loading the team members, more details in the browser console.')
      }
    }

    const getEvents = async () => {
      try {
        const list = await axios.get(`${BASE_URL}/api/events`)
        setEventList(list.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading the events list, more details in the browser console.')
      }
    }

    const getAlbums = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/gallery`)
        if (response.data.length === 0) {
          setEmptyBool(true)
        }
        setAlbumsList(response.data)
      } catch (error) {
        console.error('Database error when getting albums: ', error)
        alert('There was an error loading the gallery albums, more details in the browser console.')
      }
    }

    const getLanInfo = async () => {
      try {
        const item = await axios.get(`${BASE_URL}/api/laninfo`)
        setLanInfo(item.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading gatorlan info, more details in the browser console.')
      }
    }

    getMembers()
    getEvents()
    getAlbums()
    getLanInfo()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout isMobile={isMobile} maxMd={maxMd}/>}>
          <Route
            index
            element={
              <>
                <BlurOne/>
                <Hero minLg={minLg}/>
                <HomeContent maxSm={maxSm} minXl={minXl}/>
              </>
            }
          />
          <Route
            path='/about'
            element={<AboutContent minMd={minMd} minLg={minLg}/>}
          />
          <Route
            path='/team'
            element={<TeamContent members={members}/>}
          />
          <Route
            path='/events'
            element={<EventsContent minLg={minLg} eventList={eventList} lanInfo={lanInfo}/>}
          />
          <Route
            path='/gallery'
            element={<Gallery albumsList={albumsList} emptyBool={emptyBool}/>}
          />
          <Route
            path='/login'
            element={<Login/>}
          />
          <Route
            path='/admin'
            element={<Admin/>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
