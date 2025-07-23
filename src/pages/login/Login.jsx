import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [password, setPassword] = useState(null)

  const handleChange = (event) => {
    event.preventDefault()
    setPassword(event.target.value)  
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post()
  }

  return (
    <div className='flex h-[68.9vh]'>
      <div className='w-screen flex justify-center items-center'>
        <div className='flex flex-col border-2 rounded-2xl border-[#1a1a1a] p-5'>
          <form className='flex flex-col' method='post'>
            <p className='font-display text-ggwhite text-3xl'>Admin Checkpoint:</p>
            <input 
              className='mt-5 pl-2 bg-gray-600 rounded-lg w-full h-8 focus:outline-none'
              type="text"
              placeholder='admin password' 
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