const HomeContent = () => {
  return (
    <div className='justify-center flex'>
      <div className='test-red flex justify-between w-2/3 h-screen'>
        <div className='test-blue flex flex-col gap-8 w-[531px]'>
          <img 
            className="w-[531px] h-96 rounded-3xl"
            src="https://i.imgur.com/jQxoy3E.png"
          />
          <div className='pl-5'>
            <p className='text-3xl text-ggwhite font-display'>
              Our Skills
            </p>
            <p className='text-md text-ggorange font-display'>
              We're known for tactical brilliance, unstoppable synergy, and fearless competition -- our skills speak for themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent