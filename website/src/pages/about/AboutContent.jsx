import AboutBlurOne from '../../bgblurs/AboutBlurOne'
import AboutTopLines from '../../components/decorative/AboutTopLines'
import AboutBottomLines from '../../components/decorative/AboutBottomLines'
import Carousel from '../../components/Carousel'
import Coins from '../../components/decorative/Coins'
import AffiliatedClubs from './AffiliatedClubs'
import { LuX } from 'react-icons/lu'
import OrangeButton from '../../components/OrangeButton'

const AboutContent = ({ minLg, minMd }) => {
  return (
    <>
      <div className='relative py-20 lg:py-20 flex flex-col items-center justify-center w-screen min-h-screen'>
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

        {/* divider for smaller screens*/}
        {!minLg && 
          <div className='flex items-center justify-center mb-9 gap-x-5 w-screen z-2'>
            <div className='h-[3px] bg-ggwhite w-3/5 z-2'/>
            <LuX size='32'/>
          </div>
        }

        <div className='px-10 lg:px-20 flex flex-col gap-y-15 min-h-fit pt-5 lg:pt-10 relative w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
          <div className='items-center flex gap-x-15'>
            {minLg && <img className='lg:w-100 lg:h-60 xl:w-100 xl:h-70 2xl:w-120 2xl:h-80 rounded-4xl' src='/about/about-img1.png'/>}
            <div className='flex flex-col text-center justify-center items-center gap-y-3'>
              <p className='text-3xl text-ggwhite font-display'>Everyone is here!</p>
              <p className='text-base text-ggwhite font-display pb-4'>Whether you are interested in casual gaming or looking for a new challenge, we strive to. Here at Gator Gaming, we just want to have fun playing video-games (and we know you do too). Our team is dedicated to creating a collaborative environment that promotes quality gaming, integrity, diversity, and a sense of community.</p>
              <OrangeButton text='Team'/>
            </div>
          </div>
          <div className='items-center flex gap-x-15'>
            <div className='flex flex-col text-center justify-center items-center gap-y-3'>
              <p className='text-3xl text-ggwhite font-display'>Let's-A-Go</p>
              <p className='text-base text-ggwhite font-display pb-4'>Gator Gaming hosts weekly events for members to come together and share their love of gaming! From roller skating outings to family-feud competition to te traditional double-elimination bracket, there’s an event for everyone. </p>
              <OrangeButton text='Events'/>
            </div>
            {minLg && <img className='lg:w-100 lg:h-60 xl:w-100 xl:h-70 2xl:w-120 2xl:h-80 rounded-4xl' src='/about/about-img2.png'/>}
          </div>
        </div>

        <Coins minMd={minMd}/>

        <AffiliatedClubs/>
      </div>
    </>
  )
}

export default AboutContent