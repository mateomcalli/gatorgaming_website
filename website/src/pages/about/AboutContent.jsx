const AboutContent = () => {
  return (
    <div className='relative mt-0 pt-20 flex justify-center w-screen h-screen'>
      <div className='absolute right-0 -top-20 sm:-top-50 md:-top-70 lg:-top-85 min-w-[500px] pointer-events-none'>
        <img src='about-top-bg5.png'/>
      </div>
      <div className='relative w-screen md:w-180 lg:w-200 xl:w-250 2xl:w-332'>
        <div className='test-red justify-between flex flex-col lg:flex-row lg:items-center gap-x-10'>
          <div className='flex flex-col gap-y-5 lg:gap-y-3 lg:w-2/5 lg:text-start lg:text-pretty text-center'>
            <p className='test-red pt-6 lg:pt-0 text-4xl font-bold font-display'>We are Gator Gaming.</p>
            <p className='test-red text-lg font-display'>Gator Gaming is the premier hub for video game enthusiasts here at UF. Want to show off your smash bros skills? Want to discover new indie RPGs? Want to meet some amazingly cool people? We’ve got you covered.</p>
          </div>
          <div className='max-w-120'>
            <img className='rounded-4xl' src='about-carousel1.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent