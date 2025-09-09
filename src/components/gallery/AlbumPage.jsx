import { useEffect, useState } from 'react'
import axios from 'axios'
import ClickableImage from './ClickableImage'
import { motion, AnimatePresence } from 'framer-motion'

const AlbumPage = ({ _id }) => {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/gallery/${_id}`)
        setImages(response.data.images)
      } catch (error) {
        console.error('Issue with getting images from database: ', error)
      }
    }
    getImages()
  }, [])

  return (
    <>
      <div className='gap-5 items-stretch grid grid-cols-2 lg:grid-cols-3 sm:w-fit px-5 md:px-0 md:w-180 lg:w-220 xl:w-250'>
        {(images.length !== 0) && 
          images.map(image => (
            <ClickableImage image={image} setSelectedImage={setSelectedImage}/>
          ))
        }
      </div>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              key='overlay'
              className='fixed inset-0 bg-black/70 z-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            />
            <motion.img
              key='selectedImage'
              className='fixed top-1/2 left-1/2 max-w-[70vw] max-h-[70vh] -translate-x-1/2 -translate-y-1/2 z-10 object-contain'
              layoutId={selectedImage}
              src={selectedImage}
              alt='Gallery image'
            />
          </>
        )}
      </AnimatePresence>

    </>
  )
}

export default AlbumPage