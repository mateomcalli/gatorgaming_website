import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import { LuX } from "react-icons/lu"

const Member = ({ id, name, position, hp, favoriteGames, toggleRefresh }) => {
  const [hovered, setHovered] = useState(false)

  const handleDelete = async (id, name) => {
    if (confirm(`Are you sure you want to remove this member: ${name}?`)) {
      try {
        await axios.delete(`http://localhost:3000/api/members/${id}`)
        toggleRefresh(prev => !prev)
      } catch (error) {
        console.log(error)
        alert('Failed to remove the member from the database. Error:', error)
      }
    } return
  }
  
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='p-3 items-center justify-between rounded-lg flex bg-ggbg text-ggwhite transition-colors drop-shadow-xl duration-200 hover:bg-[rgba(244,126,32,0.1)]'
      >
        <div className='flex-col'>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>Name: </span>{name}</p>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>Position: </span>{position}</p>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>HP: </span>{hp}</p>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>Favorite Games: </span>{favoriteGames}</p>
        </div>
        <AnimatePresence>
          {hovered &&
            <motion.a 
              initial= {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit= {{ opacity: 0 }}
              onClick={() => handleDelete(id, name)}
              className='cursor-pointer'
            >
              <LuX className='opacity-80' size='24'/>
            </motion.a>
          }
        </AnimatePresence>
      </div>
    )
  }

export default Member