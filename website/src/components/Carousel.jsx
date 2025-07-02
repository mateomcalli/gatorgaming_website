import { useState } from 'react'

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {url: '/about/about-carousel1.png', id: 0},
    {url: '/about/about-carousel2.png', id: 1},
    {url: '/about/about-carousel3.png', id: 2},
    {url: '/about/about-carousel4.png', id: 3},
    {url: '/about/about-carousel5.png', id: 4}
  ]
  
  console.log(images.length)

  return (
    <>
      <div>
        {images.map(image => (
          <img 
            className={selectedImage === image.id ? 'test-red w-120 h-80 object-cover rounded-4xl' : 'hidden'} 
            src={image.url}
            key={image.id}
          />
        ))}
      </div>
      <button 
        type='button'
        onClick={() => setSelectedImage(selectedImage + 1)}
      >
        hi
      </button>
    </>
  )
}

export default Carousel