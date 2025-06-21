import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import Hero from './pages/Hero'
import HomeContent from './pages/HomeContent'
import BlurOne from './bgblurs/BlurOne'

const App = () => {
  const [selected, setSelected] = useState('Home')
  const isMobile = useMediaQuery({ maxWidth: 920 })

  return (
    <>
      <div className='bg-ggbg w-fit scroll-smooth'>
        <BlurOne/>
        {!isMobile && <Navbar selected={selected} setSelected = {setSelected}/>}
        {isMobile && <MobileNavbar/>}
        <Hero/>
        <HomeContent/>
      </div>
    </>
  )
}

export default App
