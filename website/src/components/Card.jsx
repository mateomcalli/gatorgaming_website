import { useState } from "react"
import { motion } from "framer-motion"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

const Card = ({ name, position, flipped, setFlipped }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='w-75 h-105 relative perspective-[1500px] transition-transform'
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className='relative w-full h-full transform-3d'
      >
        <CardFront name={name} position={position} flipped={flipped} setFlipped={setFlipped} hovered={hovered}/>
        <CardBack flipped={flipped} setFlipped={setFlipped} hovered={hovered}/>
       </motion.div>
    </div>
  )
}

export default Card