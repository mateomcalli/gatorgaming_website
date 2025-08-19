import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Login = () => {
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${BASE_URL}/api/auth`, { withCredentials: true })
        window.location.href = '/admin'
      } catch (error) { 
        console.log(error)
      }
    }
    checkAuth()
  }, [])

  const [password, setPassword] = useState(null)
  const [failure, setFailure] = useState(false)
  const formRef = useRef(null)

  const handleChange = (event) => {
    event.preventDefault()
    setPassword(event.target.value)  
  }

  const handleFailure = () => {
    setFailure(true)
    setTimeout(() => {
      setFailure(false)
    }, '3000')
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      await axios.post(`${BASE_URL}/api/login`, { password }, { withCredentials: true })
      window.location.href = '/admin'
    } catch (error) {
      handleFailure()
      console.error(error)
    }
    setPassword('')
    formRef.current.reset()
  }

  return (
    <div className='w-screen flex justify-center items-center min-h-screen'>
      <div className='flex flex-col w-100 h-fit border-2 rounded-xl border-[#1a1a1a] p-5'>
        <form className='flex flex-col gap-y-5' method='post' onSubmit={handleSubmit} ref={formRef}>
          <p className='text-center font-display text-ggwhite text-3xl'>Admin Checkpoint:</p>
          <input 
            className={`${failure ? 'red' : ''} pl-2 bg-gray-600 rounded-md w-full h-8 focus:outline-none`}
            type="text"
            placeholder={failure ? 'incorrect, try again!' : 'admin password'}
            onChange={handleChange}
          />
          <motion.button
            whileHover={{
              backgroundColor: 'rgb(244, 126, 32, 0.6)',
              transition: { duration: 0.3 },
            }}
            className='font-display hover:cursor-pointer w-fit self-center px-3 py-1 rounded-md'
            type='submit'
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default Login