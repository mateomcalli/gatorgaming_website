import AboutBlurOne from '../../bgblurs/AboutBlurOne'
import AboutTopLines from '../../components/decorative/AboutTopLines'
import AboutBottomLines from '../../components/decorative/AboutBottomLines'
import Carousel from '../../components/Carousel'

const AboutContent = ({ minLg }) => {
  return (
    <div className='relative mt-0 pt-20 flex justify-center w-screen min-h-screen'>
      <AboutBlurOne/>
      <div className='test-green pt-10 relative w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
        {minLg && <AboutTopLines/>}
        <div className='test-blue pt-5 pb-8 justify-center lg:justify-between flex flex-col lg:flex-row lg:items-center gap-x-10 gap-y-10'>
          <div className='test-red flex flex-col gap-y-5 lg:gap-y-3 lg:w-2/5 lg:text-start lg:text-pretty text-center'>
            <p className='px-5 md:px-0 pt-6 lg:pt-0 text-4xl font-bold font-display'>We are Gator Gaming.</p>
            <p className='px-5 md:px-0 text-lg font-display'>Gator Gaming is the premier hub for video game enthusiasts here at UF. Want to show off your smash bros skills? Want to discover new indie RPGs? Want to meet some amazingly cool people? We’ve got you covered.</p>
          </div>
          {/* <div className='m-auto lg:m-0 w-100 sm:w-120 2xl:w-145 max-w-150'>
            <img className='rounded-4xl' src='/about/about-carousel1.png'/>
          </div> */}
          <Carousel/>
        </div>
        {minLg && <AboutBottomLines/>}
      </div>
    </div>
    // <Carousel/>
  )
}

export default AboutContent