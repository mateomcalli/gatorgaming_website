import { useMediaQuery } from 'react-responsive'
import HomeButtons from '../components/HomeButtons'
import HeroLines from '../components/HeroLines'

const Hero = () => {
  const isLg = useMediaQuery({ minWidth: 1024 })

  return (
    <div className='pt-20 md:justify-center flex z-2'>
      <div className ='w-screen flex justify-between lg:items-center lg:w-3/4 lg:h-[calc(100vh-5rem)] z-2'>
        <div className='px-3 text-balance flex flex-col items-center text-center pt-10 pb-20 sm:pl-2 md:pl-5 lg:text-left lg:items-start lg:w-2/3 lg:pl-10 lg:text-pretty z-2 font-display'>
          <p className='text-xl pb-3 sm:text-2xl text-ggwelcome'>
            Welcome to Gator Gaming!
          </p>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-ggwhite'>
            We're UF's student-led gaming club, committed to hosting community events that are completely free for all players.
          </h1>
          <p className='text-ggorange py-8 text-md sm:px-0 md:text-lg'>
            Level Up Together: Your Ultimate Campus Gaming Community
          </p>
          <HomeButtons/>
        </div>
        {isLg && <HeroLines/>}
      </div>
    </div>
  )
}

export default Hero