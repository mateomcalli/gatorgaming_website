import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import HomeContent from './pages/HomeContent'

const App = () => {
  const [selected, setSelected] = useState('Home')

  return (
    <>
      <div className=' bg-ggbg h-fit'>
        <Navbar selected={selected} setSelected = {setSelected}/>
        <Hero/>
        <HomeContent/>
      </div>
    </>
  )
}

export default App
