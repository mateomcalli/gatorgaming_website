import AboutBlurOne from '../../bgblurs/AboutBlurOne'
import AboutTopLines from '../../components/decorative/AboutTopLines'
import AboutBottomLines from '../../components/decorative/AboutBottomLines'
import Carousel from '../../components/Carousel'
import { FaArrowRightLong } from 'react-icons/fa6';

const AboutContent = ({ minLg }) => {
  return (
    <>
      <div className='relative my-20 flex flex-col items-center justify-center w-screen min-h-screen'>
        <AboutBlurOne/>
        <div className='mb-10 min-h-fit pt-0 relative w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
          {minLg && <AboutTopLines/>}
            <div className='pt-5 pb-8 justify-center lg:justify-between flex flex-col lg:flex-row lg:items-center gap-x-10 gap-y-10'>
              <div className='flex flex-col gap-y-5 lg:gap-y-3 lg:w-[32%] xl:w-[35%] lg:text-start lg:text-pretty text-center'>
                <p className='px-5 md:px-0 pt-6 lg:pt-0 text-4xl text-ggwhite font-bold font-display'>We are Gator Gaming.</p>
                <p className='px-5 md:px-0 text-lg text-ggwhite font-display'>Gator Gaming is the premier hub for video game enthusiasts here at UF. Want to show off your smash bros skills? Want to discover new indie RPGs? Want to meet some amazingly cool people? We’ve got you covered.</p>
              </div>
            <Carousel/>
            </div>
          {minLg && <AboutBottomLines/>}
        </div>
        <div className='px-20 flex flex-col min-h-fit pt-10 relative w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
          <div className='items-center flex gap-x-15'>
            {minLg && <img className='lg:w-100 lg:h-60 xl:w-100 xl:h-70 2xl:w-120 2xl:h-80 rounded-4xl' src='/about/about-img1.png'/>}
            <div className='flex flex-col text-center justify-center items-center gap-y-3'>
              <p className='text-3xl text-ggwhite font-display'>Everyone is here!</p>
              <p className='text-base text-ggwhite font-display'>Whether you are interested in casual gaming or looking for a new challenge, we strive to. Here at Gator Gaming, we just want to have fun playing video-games (and we know you do too). Our team is dedicated to creating a collaborative environment that promotes quality gaming, integrity, diversity, and a sense of community.</p>
              <a
                href="/team"
                rel="noopener noreferrer"
                className="mt-4 z-3 flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken"
              >Team
                <div className="flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4">
                  <FaArrowRightLong className="text-lg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent