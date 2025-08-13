import { useEffect, useState } from 'react'
import axios from 'axios'

const AlbumPage = ({ _id }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/gallery/${_id}`)
        setImages(response.data.images)
      } catch (error) {
        console.error('Issue with getting images from database: ', error)
      }
    }
    getImages()
  }, [])

  const optimizeURLs = (url, width, height) => {
    return url.replace('/upload/', `/upload/f_auto/q_auto/w_${width}/`)
  }

  return (
    <div className='gap-5 items-stretch grid grid-cols-2 lg:grid-cols-3 sm:w-fit px-5 md:px-0 md:w-180 lg:w-220 xl:w-250'>
      {(images.length !== 0) && 
        images.map(image => (
          <img className='object-cover' src={optimizeURLs(image, 700)} loading='lazy'/>
        ))
      }
    </div>
  )
}

export default AlbumPage