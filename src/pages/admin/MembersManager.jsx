import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Member from './Member'
import { GrFormUpload } from 'react-icons/gr'

const MembersManager = ({ refresh, toggleRefresh }) => {
  const formRef = useRef(null)
  const [members, setMembers] = useState([])
  const [membersData, setMembersData] = useState({
    name: '',
    position: '',
    hp: '',
    picture: '',
    favoriteGames: '',
    aboutMe: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const getMembers = async () => {
      try {
        setSubmitting(false)
        toggleRefresh(false)
        const members = await axios.get(`${BASE_URL}/api/members`)
        setMembers(members.data)
      } catch (error) {
        console.error('Error:', error)
        alert('There was an error loading current members, more details in the browser console.')
      }
    }

    getMembers()
  }, [refresh])

  const handleChange = (event) => {
    event.preventDefault()
    setMembersData(prev => ({
      ...prev,
      [event.target.name]: event.target.name === 'picture' ? event.target.files : event.target.value
    }))
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      setSubmitting(true)

      const formData = new FormData()

      formData.append('name', membersData.name)
      formData.append('position', membersData.position)
      formData.append('hp', membersData.hp)
      formData.append('favoriteGames', membersData.favoriteGames)
      formData.append('aboutMe', membersData.aboutMe)
      formData.append('picture', membersData.picture[0])

    try {
      await axios.post(`${BASE_URL}/api/members`, formData, { withCredentials: true })

      setMembersData({
        name: '',
        position: '',
        hp: '',
        picture: '',
        favoriteGames: '',
        aboutMe: ''
      })
      formRef.current.reset()
      toggleRefresh(true)
    } catch (error) {
      console.error('There was an error trying to add a new member:', error)
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
      <div className='w-100 h-fit'>
        <p className='text-2xl font-display text-ggwhite pl-3 pb-2'>Current E-Board:</p>
        <div className='flex flex-col'>
          {members.length === 0 && <p className='font-display text-ggwhite'>No members found, try adding some!</p>}
          {members.length !== 0 && members.map(member => (
            <Member
              key={member._id}
              id={member._id}
              name={member.name}
              position={member.position}
              hp={member.hp}
              favoriteGames={member.favoriteGames}
              toggleRefresh={toggleRefresh}
            />
          ))}
        </div>
      </div>
      <div className='md:w-60 h-fit px-3 pt-2 rounded-lg drop-shadow-xl bg-[rgba(117,121,128,0.1)]'>
        <p className='font-display text-ggorange pb-2'>Add a new member:</p>
        <form className='flex flex-col' ref={formRef} onSubmit={handleSubmit}>
          <input className='font-display placeholder-[#999] focus:outline-none' name='name' placeholder='Name' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' name='position' placeholder='Position' maxLength='16' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' name='hp' placeholder='HP (no real utility, dw)' type='number' max='999' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' name='favoriteGames' placeholder='Favorite Game(s)' maxLength='50' onChange={handleChange} required />
          <input className='font-display placeholder-[#999] focus:outline-none' maxLength='140' name='aboutMe' placeholder='About Me (<140 characters)' onChange={handleChange} required />
          <div className='flex w-fit gap-2'>
            <p className='font-display text-[#999]'>Photo of member:</p>
            <motion.label
              className={membersData.picture.length === 1 
                ? 'text-green-700 rounded-md cursor-pointer w-fit h-fit font-display' 
                : 'rounded-md cursor-pointer w-fit h-fit font-display'}
              whileHover={{
                backgroundColor: 'rgb(244, 126, 32, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <GrFormUpload size='26'/>
              <input 
                type='file'
                accept='.png,.jpeg,.jpg,.webp'
                className='hidden'
                name='picture'
                onChange={handleChange}
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
            {submitting ? 'Submitting, please wait...' : 'Submit'}
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default MembersManager