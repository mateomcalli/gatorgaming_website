import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Album from './Album'
import { GrFormUpload } from "react-icons/gr";

const GalleryManager = ({ refresh, toggleRefresh }) => {
  const formRef = useRef(null)
  const [albumsList, setAlbumsList] = useState([])
  const [albumData, setAlbumData] = useState({
    title: '',
    dateAdded: '',
    coverImage: '',
    images: []
  })

  useEffect(() => {
    const getAlbums = async () => {
      try {
        toggleRefresh(false)
        const list = await axios.get('http://localhost:3000/api/gallery')
        setAlbumsList(list.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading the gallery, more details in the browser console.')
      }
    }
    getAlbums()
  }, [refresh])

  const handleChange = (event) => {
    setAlbumData(prev => ({
      ...prev,
      [event.target.name]: (event.target.name === 'images' || event.target.name === 'coverImage') ? event.target.files : event.target.value 
    }))
  }

  const handleSubmitAlbum = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('title', albumData.title)
    formData.append('coverImage', albumData.coverImage[0]) // should be fine
    for (let i = 0; i < albumData.images.length; i++) {
      formData.append('images', albumData.images[i])
    }

    try {
      await axios.post('http://localhost:3000/api/gallery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      formRef.current.reset()
      setAlbumData({
        title: '',
        dateAdded: '',
        coverImage: '',
        images: []
      })
      setTimeout(() => {
        toggleRefresh(true)
      }, '10000')
    } catch (error) {
      console.error('Upload failed:', error)
      alert('There was an error uploading the album.')
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
      <div className='w-100 h-fit'>
        <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Albums in gallery:</p>
        <div className='flex flex-col'>
          {albumsList.length === 0 && <p className='pl-3 font-display'>No albums posted!</p>}
          {albumsList.length !== 0 && albumsList.map(album => (
            <Album
              key={album._id}
              id={album._id}
              title={album.title}
              dateAdded={album.dateAdded}
              coverImage={album.coverImage}
              images={album.images}
              toggleRefresh={toggleRefresh}
            />
          ))}
        </div>
      </div>

      <div className='md:w-60 h-fit px-3 pt-2 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'>
        <p className='font-display text-ggorange pb-2'>Add a new album:</p>
        <form className='flex flex-col' ref={formRef} onSubmit={handleSubmitAlbum}>
          <input className='font-display placeholder-[#999] focus:outline-none' name='title' placeholder="Title" onChange={handleChange} required/>
          <div className='flex w-fit gap-2'>
            <p className='font-display text-[#999]'>Upload Cover Image:</p>
            <motion.label
              className= {albumData.images.length === 1 ? 'text-green-700 rounded-md cursor-pointer w-fit h-fit font-display' : 'rounded-md cursor-pointer w-fit h-fit font-display' } //not working
              whileHover={{
                backgroundColor: 'rgb(244, 126, 32, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <GrFormUpload size='26'/>
              <input 
                type='file'
                accept='image/*'
                className='hidden'
                name='coverImage'
                onChange={handleChange}
                required
              />
            </motion.label>
          </div>
          <div className='flex w-fit gap-2'>
            <p className='font-display text-[#999]'>Upload Images:</p>
            <motion.label
              className='rounded-md cursor-pointer w-fit h-fit font-display'
              whileHover={{
                backgroundColor: 'rgb(244, 126, 32, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <GrFormUpload size='26'/>
              <input 
                type='file'
                accept='image/*'
                className='hidden'
                name='images'
                onChange={handleChange}
                multiple
                required
              />
            </motion.label>
          </div>
          <motion.button
            whileHover={{
              backgroundColor: 'rgb(244, 126, 32, 0.6)',
              transition: { duration: 0.3 },
            }}
            className='font-display mt-2 mb-3 hover:cursor-pointer w-full self-center px-3 py-1 rounded-md'
            type='submit'
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default GalleryManager