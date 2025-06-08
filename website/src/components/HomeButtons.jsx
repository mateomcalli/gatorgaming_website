import { FaArrowRightLong } from 'react-icons/fa6';

const HomeButtons = () => {
  return (
    <div className='flex gap-5'>
      <a
        href="https://discord.com/invite/s99axhqQac"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken"
      >Discord
        <div className="flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4">
          <FaArrowRightLong className="text-lg" />
        </div>
      </a>
      <a
        href='https://linktr.ee/gatorgaminguf'
        target='_blank'
        rel='noopener noreferrer'
        className='h-10 w-fit px-5 flex items-center justify-around rounded-3xl border-1 border-ggwhite text-ggwhite fade-bg-orange'
      >Learn more
      </a>
    </div>
  )
}

export default HomeButtons