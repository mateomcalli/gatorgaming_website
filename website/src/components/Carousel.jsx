import { useState } from 'react'
import { RiArrowRightWideFill } from "react-icons/ri"
import { RiArrowLeftWideFill } from "react-icons/ri"

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {url: '/about/about-carousel1.png', id: 0},
    {url: '/about/about-carousel2.png', id: 1},
    {url: '/about/about-carousel3.png', id: 2},
    {url: '/about/about-carousel4.png', id: 3},
    {url: '/about/about-carousel5.png', id: 4}
  ]

  return (
    <>
      <div className='test-red m-auto lg:mt-5 gap-x-5 items-center w-fit relative'>
        <div className='flex'>
          <button 
            onClick={() => selectedImage === 0 ? setSelectedImage(selectedImage + 4) : setSelectedImage(selectedImage - 1)}
          >
            <RiArrowLeftWideFill size='40'/>
          </button>
          {images.map(image => (
            <img 
              className={selectedImage === image.id ? 'w-80 h-45 md:w-130 md:h-85 lg:w-107 lg:h-73 xl:w-120 xl:h-80 2xl:w-140 2xl:h-90 object-cover rounded-4xl' : 'hidden'} 
              src={image.url}
              key={image.id}
            />
          ))}
          <button 
            onClick={() => selectedImage === 4 ? setSelectedImage(selectedImage - 4) : setSelectedImage(selectedImage + 1)}
          >
            <RiArrowRightWideFill size='40'/>
          </button>
        </div>
          <div className='flex gap-x-2 items-center justify-center w-full h-8'>
            {images.map(image => (
              <button key={image.id} onClick={() => setSelectedImage(image.id)}>
                <div key={image.id} className='bg-ggwhite w-2 h-2 rounded-full'/>
              </button>
            ))}
          </div>
        </div>
    </>
  )
}

export default Carousel