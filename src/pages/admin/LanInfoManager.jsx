import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const LanInfoManager = ({ refresh, toggleRefresh }) => {
  const formRef = useRef(null)
  const [lanInfo, setLanInfo] = useState(null)
  const [lanInfoData, setLanInfoData] = useState({
    edition: '',
    dateRange: ''
  })

  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const getLanInfo = async () => {
      try {
        toggleRefresh(false)
        const item = await axios.get(`${BASE_URL}/api/laninfo`)
        setLanInfo(item.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading gatorlan info, more details in the browser console.')
      }
    }

    getLanInfo()
  }, [refresh])

  const handleChange = (event) => {
    event.preventDefault()
    setLanInfoData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      await axios.post(`${BASE_URL}/api/laninfo`, lanInfoData, {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY
        }
      })
      setLanInfoData({ edition: '', dateRange: '' })
      formRef.current.reset()
      toggleRefresh(true)
    } catch (error) {
      console.error(error)
      alert('Failure to submit event. Error: ' + error)
    }
  }

  return (
    <div className='w-100 md:w-170 flex flex-col md:flex-row gap-8 md:gap-13.5 justify-between'>
      <div>
        <p className='text-2xl font-display text-ggwhite pb-3'>GatorLAN Information:</p>
        <p className='text-md font-display text-ggwhite'>
          Currently displayed edition:
          <span className='text-ggorange font-mono pl-1'>{lanInfo?.edition}</span>
        </p>
        <p className='text-md font-display text-ggwhite'>
          Currently displayed date range:
          <span className='text-ggorange font-mono pl-1'>{lanInfo?.dateRange}</span>
        </p>
      </div>
      <div>
        <form
          className='flex flex-col p-2 pb-3 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <p className='font-display text-ggorange pb-2 self-start pl-1 md:pl-0 md:self-center'>Change GatorLAN dates:</p>
          <input className='ml-1 font-display placeholder-[#999] focus:outline-none' name='edition' placeholder="Edition" onChange={handleChange} required />
          <input className='ml-1 font-display placeholder-[#999] focus:outline-none' name='dateRange' placeholder='Dates (ex. "May 1-4")' onChange={handleChange} required />
          <motion.button
            whileHover={{
              backgroundColor: 'rgb(244, 126, 32, 0.6)',
              transition: { duration: 0.3 },
            }}
            className='font-display mt-2 h-8 hover:cursor-pointer w-full self-center px-3 rounded-md'
            type='submit'
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default LanInfoManager