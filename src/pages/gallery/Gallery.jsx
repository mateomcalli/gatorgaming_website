import { useState, useEffect } from "react"
import axios from "axios"
import AlbumPage from "../../components/gallery/AlbumPage"
import AlbumThumbnail from "../../components/gallery/AlbumThumbnail"

const Gallery = () => {
  const [albumsList, setAlbumsList] = useState([])
  const [emptyBool, setEmptyBool] = useState(false)
  const [albumOpen, setAlbumOpen] = useState(false)
  
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/gallery')
        if (response.data.length === 0) {
          setEmptyBool(true)
        }
        setAlbumsList(response.data)
      } catch (error) {
        console.error('Database error when getting albums: ', error)
      }
    }
    getAlbums()
  }, [])

  return (
    <div className='relative pt-30 lg:pb-50 flex flex-col items-center w-screen min-h-screen'>
      <div className='flex flex-col gap-y-8 h-fit relative w-210'>
        <p className='text-4xl font-display text-ggwhite font-semibold'>Gator Gaming</p>
        {emptyBool && <p>No albums posted in gallery.</p>}
        {(albumOpen === false) && !emptyBool && 
          albumsList.map(album => (
            <AlbumThumbnail key={album._id} _id={album._id} title={album.title} coverImage={album.coverImage} setAlbumOpen={setAlbumOpen}/>
          ))
        }
        {(albumOpen !== false) && <AlbumPage _id={albumOpen}/>}
      </div>
    </div>
  )
}

export default Gallery