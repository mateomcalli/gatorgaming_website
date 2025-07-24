import axios from 'axios'
import { useState, useRef, useEffect } from 'react'

const Login = () => {

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:3000/api/auth', { withCredentials: true })
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

  const url = 'http://localhost:3000/api/login'

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
      await axios.post(url, { password }, { withCredentials: true }) // must send an object to post
      window.location.href = '/admin'
    } catch (error) {
      handleFailure()
      console.error(error)
    }
    setPassword('')
    formRef.current.reset()
  }

  return (
    <div className='flex min-h-[490px]'>
      <div className='w-screen flex justify-center items-center'>
        <div className='flex flex-col border-2 rounded-2xl border-[#1a1a1a] p-5'>
          <form className='flex flex-col' method='post' onSubmit={handleSubmit} ref={formRef}>
            <p className='font-display text-ggwhite text-3xl'>Admin Checkpoint:</p>
            <input 
              className={`${failure ? 'red' : ''} mt-5 pl-2 bg-gray-600 rounded-lg w-full h-8 focus:outline-none`}
              type="text"
              placeholder={failure ? 'incorrect, try again!' : 'admin password'}
              onChange={handleChange}
            />
            <button type='submit' className='w-fit px-2 self-center font-display cursor-pointer mt-6 rounded-4xl border-2 border-ggorange'>submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login