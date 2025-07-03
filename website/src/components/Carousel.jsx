import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RiArrowRightWideFill } from "react-icons/ri"
import { RiArrowLeftWideFill } from "react-icons/ri"

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [direction, setDirection] = useState(0)

  const images = [
    {url: '/about/about-carousel1.png', id: 0},
    {url: '/about/about-carousel2.png', id: 1},
    {url: '/about/about-carousel3.png', id: 2},
    {url: '/about/about-carousel4.png', id: 3},
    {url: '/about/about-carousel5.png', id: 4}
  ]

  const handleRight = () => {
    setDirection(1)
    selectedImage === 4 ? setSelectedImage(selectedImage - 4) : setSelectedImage(selectedImage + 1)
  }

  const handleLeft = () => {
    setDirection(-1)
    selectedImage === 0 ? setSelectedImage(selectedImage + 4) : setSelectedImage(selectedImage - 1)
  }

  return (
    <>
      <div className='m-auto lg:m-0 lg:mt-5 items-center w-fit relative'>
        <div className='flex items-center'>
          <motion.button
            whileTap={{
              scale: 1.4,
              transition: { duration: 0.3 }
            }}
            className='mr-3 h-fit'
            onClick={() => handleLeft()}
          >
            <RiArrowLeftWideFill size='40'/>
          </motion.button>
          {images.map(image => (
            selectedImage === image.id &&
              <motion.img
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                className='w-90 h-50 sm:w-110 sm:h-70 md:w-130 md:h-80 lg:w-107 lg:h-73 xl:w-120 xl:h-80 2xl:w-140 2xl:h-90 object-cover rounded-4xl pointer-events-none' 
                src={image.url}
                key={image.id}
              />
          ))}
          <motion.button
            whileTap={{
              scale: 1.4,
              transition: { duration: 0.3 }
            }}
            className='ml-3 h-fit'
            onClick={() => handleRight()}
          >
            <RiArrowRightWideFill size='40'/>
          </motion.button>
        </div>
          <div className='flex gap-x-2 items-center justify-center w-full h-8'>
            {images.map(image => (
              <button key={image.id} onClick={() => setSelectedImage(image.id)}>
                <div key={image.id} className={selectedImage === image.id ? 'bg-ggorange w-2 h-2 rounded-full' : 'bg-ggwhite w-2 h-2 rounded-full fade-orange cursor-pointer'}/>
              </button>
            ))}
          </div>
        </div>
    </>
  )
}

export default Carousel