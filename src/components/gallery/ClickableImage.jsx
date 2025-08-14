import { motion } from 'framer-motion'

const ClickableImage = ({ image, setSelectedImage }) => {

  const optimizeURLs = (url, width, height) => {
    return url.replace('/upload/', `/upload/f_auto/q_auto/w_${width}/`)
  }
  

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setSelectedImage(image)}
        layoutId={image}
        className='w-full h-full p-0'
      >
        <img className='h-full w-full object-cover' src={optimizeURLs(image, 700)} loading='lazy'/>
      </motion.button>
    </div>
  )
}

export default ClickableImage