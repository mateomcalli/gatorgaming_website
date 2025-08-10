import { motion } from 'framer-motion'

const AlbumThumbnail = ({ _id, title, coverImage, setAlbumOpen, setAlbumName }) => {
  const handleClick = () => {
    setAlbumOpen(_id)
    setAlbumName(title)
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className='flex flex-col w-full sm:w-fit gap-y-4 fade-orange'
    >
      <button onClick={handleClick} className='cursor-pointer rounded-xl w-full h-70 sm:w-65 sm:h-65 md:w-75 md:h-75'>
        <img className='w-full h-full object-cover rounded-xl' src={coverImage}/>
      </button>
      <p className='relative ml-4 sm:m-auto text-xl drop-shadow-2xl'>{title}</p>
    </motion.div>
  )
}

export default AlbumThumbnail