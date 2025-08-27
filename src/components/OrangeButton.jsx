import { FaArrowRightLong } from 'react-icons/fa6'

const OrangeButton = ({ text, href }) => {
  return (
    <a
      href={href}
      rel='noopener noreferrer'
      className='z-3 flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken'
    >{text}
      <div className='flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4'>
        <FaArrowRightLong className='text-lg' />
      </div>
    </a>
  )
}

export default OrangeButton