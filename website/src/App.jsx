import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from './components/navbar/Navbar'
import MobileNavbar from './components/navbar/MobileNavbar'
import Hero from './pages/Hero'
import HomeContent from './pages/HomeContent'
import BlurOne from './bgblurs/BlurOne'
import Footer from './components/footer/Footer'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Home')
  const maxSm = useMediaQuery({ maxWidth: 767 })
  const isMobile = useMediaQuery({ maxWidth: 920 })
  const minXl = useMediaQuery({ minWidth: 1280 })

  return (
    <>
      <div className='bg-ggbg w-fit scroll-smooth'>
        <BlurOne/>
        {!isMobile && <Navbar selectedPage={selectedPage} setSelectedPage = {setSelectedPage}/>}
        {isMobile && <MobileNavbar setSelectedPage = {setSelectedPage}/>}
        <Hero/>
        <HomeContent maxSm={maxSm} minXl={minXl}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
