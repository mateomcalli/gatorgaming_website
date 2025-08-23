import { useState, useEffect } from 'react'
import AlbumPage from '../../components/gallery/AlbumPage'
import AlbumThumbnail from '../../components/gallery/AlbumThumbnail'
import { AnimatePresence, motion } from 'framer-motion'
import { IoIosArrowBack } from 'react-icons/io'

const Gallery = ({ albumsList, emptyBool }) => {
  const [albumOpen, setAlbumOpen] = useState(false)
  const [albumName, setAlbumName] = useState(null)

  return (
    <div className='relative lg:pb-50 flex flex-col items-center w-screen min-h-screen'>
      <AnimatePresence mode='wait'>
        {!albumOpen && (
          <>
            <motion.div
              className='absolute min-w-[750px] -mt-40 right-[-200px] xl:right-[-100px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img src='/gallery-blur1.png'/>
            </motion.div>
            <motion.div
              key='gallery-list'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='pt-30 px-8 sm:px-0 gap-y-8 h-fit relative w-full sm:w-auto lg:w-240'
            >
              <p className='pb-8 text-4xl font-display text-ggwhite'>Gator Gaming <span className='text-ggorange font-semibold'>Through the Years</span></p>
              {emptyBool && <p>No albums posted in gallery.</p>}
              {!emptyBool &&
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                  {albumsList.map(album => (
                    <AlbumThumbnail
                      key={album._id}
                      _id={album._id}
                      title={album.title}
                      coverImage={album.coverImage}
                      setAlbumOpen={setAlbumOpen}
                      setAlbumName={setAlbumName}
                    />
                  ))}
                </div>
              }
            </motion.div>
          </>
        )}

        {albumOpen && (
          <motion.div
            key='album-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className='pt-30 sticky top-0 bg-ggbg flex gap-x-4 px-5 md:px-0 z-1'>
              <motion.button className='cursor-pointer pb-5 fade-orange' whileTap={{ x: -4 }} onClick={() => setAlbumOpen(false)}>
                <IoIosArrowBack size='32' />
              </motion.button>
              <p className='text-4xl pb-5 font-display text-ggwhite'>{albumName}</p>
            </div>
            <AlbumPage _id={albumOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery