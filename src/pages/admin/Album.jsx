import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import { LuX } from "react-icons/lu"

const Album = ({ id, title, dateAdded, toggleRefresh }) => {
  const [hovered, setHovered] = useState(false)

  const handleDelete = async (id, title) => {
    if (confirm(`Are you sure you want to delete this album: ${title}?`)) {
      try {
        await axios.delete(`http://localhost:3000/api/gallery/${id}`)
        toggleRefresh(prev => !prev)
      } catch (error) {
        console.log(error)
        alert('Failed to delete the album. Error:', error)
      }
    } return
  }

  const dateAddedObject = new Date(`${dateAdded}`)
  const nicerDateAdded = dateAddedObject.toLocaleDateString()
  
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='p-3 items-center justify-between rounded-lg flex bg-ggbg text-ggwhite transition-colors drop-shadow-xl duration-200 hover:bg-[rgba(244,126,32,0.1)]'
      >
        <div className='flex-col'>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>Title: </span>{title}</p>
          <p className='font-mono text-ggorange'><span className='font-display text-ggwhite pr-1'>Date added:</span>{nicerDateAdded}</p>
        </div>
        <AnimatePresence>
          {hovered &&
            <motion.a 
              initial= {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit= {{ opacity: 0 }}
              onClick={() => handleDelete(id, title)}
              className='cursor-pointer'
            >
              <LuX className='opacity-80' size='24'/>
            </motion.a>
          }
        </AnimatePresence>
      </div>
    )
  }

export default Album