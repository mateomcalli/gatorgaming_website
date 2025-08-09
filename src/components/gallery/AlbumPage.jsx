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

  return (
    <div className='red flex flex-col w-full'>
      {(images.length !== 0) && 
        images.map(image => (
          <img src={image}/>
        ))
      }
    </div>
  )
}

export default AlbumPage