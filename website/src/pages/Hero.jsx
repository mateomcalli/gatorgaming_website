import HomeButtons from '../components/HomeButtons'

const Hero = () => {
  return (
    <div className='pt-20 justify-center flex'>
      <div className ='items-center flex justify-between w-2/3 h-screen-minus-navbar'>
        <div className='items-center pb-10 w-2/3 font-display sm:pl-2 md:pl-5 lg:pl-10 z-2'>
          <p className='text-ggwelcome text-2xl pb-3'>
            Welcome to Gator Gaming!
          </p>
          <h1 className='text-ggwhite font-bold text-5xl leading-tight'>
            We're UF's student-led gaming club, committed to hosting community events that are completely free for all players.
          </h1>
          <p className='text-ggorange py-8 text-lg'>
            Level Up Together: Your Ultimate Campus Gaming Community
          </p>
          <HomeButtons/>
        </div>
        <div className='z-2 w-6 flex flex-row items-center justify-between h-screen-minus-navbar sm:mr-2 md:mr-5 lg:mr-10'>
          <div className='w-[3px] h-1/8 mb-75 bg-ggwhite'/>
          <div className ='w-[3px] h-2/3 bg-ggwhite'/>
        </div>
      </div>
    </div>
  )
}

export default Hero