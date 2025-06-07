import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  const [selected, setSelected] = useState('Home')

  return (
    <>
      <div className='bg-ggbg h-screen'>
        <Navbar selected={selected} setSelected = {setSelected}/>
        <div className='pt-20 justify-center flex'>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
