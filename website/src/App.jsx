import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [selected, setSelected] = useState('Home')

  return (
    <>
      <div>
        <Navbar selected={selected} setSelected = {setSelected}/>

      </div>
    </>
  )
}

export default App
