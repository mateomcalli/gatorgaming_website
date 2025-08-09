// import { useNavigate } from 'react-router-dom'

const AlbumThumbnail = ({ _id, title, coverImage, setAlbumOpen }) => {
  // const navigate = useNavigate()
  // const sanitizedTitle = title.toLowerCase().replace(/ /g, '_') // Sample Album => sample_album

  const handleClick = () => {
    // navigate(`/gallery/${sanitizedTitle}`)
    setAlbumOpen(_id)
  }

  return (
    <div className='flex flex-col w-fit gap-y-4'>
      <button onClick={handleClick} className='cursor-pointer rounded-xl w-80 h-80'>
        <img className='w-full h-full object-cover rounded-xl' src={coverImage}/>
      </button>
      <p className='relative m-auto text-xl drop-shadow-2xl'>{title}</p>
    </div>
  )
}

export default AlbumThumbnail