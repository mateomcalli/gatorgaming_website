import SkillsList from '../components/SkillsList'

const HomeContent = () => {
  return (
    <div className='justify-center flex z-2'>
      <div className='flex space-between w-2/3 h-screen z-1'>
        <div className='flex flex-col gap-8 w-140'>
          <img 
            className="w-fill h-96 rounded-3xl z-2"
            src="https://i.imgur.com/jQxoy3E.png"
          />
          <div className='pl-5 z-2'>
            <p className='pb-2 text-3xl text-ggwhite font-display z-2'>
              Our Skills
            </p>
            <p className='w-[95%] pb-2 text-md text-ggorange font-display'>
              We're known for tactical brilliance, unstoppable synergy, and fearless competition — our skills speak for themselves.
            </p>
            <SkillsList/>
          </div>
        </div>
        <div className='w-180 z-1'>
          <div className='pl-30 pt-10'>
            <a href='#about-start'><p className='text-xl pb-3 text-ggwhite font-display scroll-m-30' id='about-start'>Who are we?</p></a>
            <p className='text-3xl pb-2 font-bold text-ggwhite font-display'>We Always Make Epic Plays</p>
            <p className='text-lg text-ggwhite font-display'>We’re a passionate gaming community dedicated to uniting players of all skill levels—whether you’re here to dominate tournaments, squad up with friends, or just have a good time. Join us and level up your gaming experience!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent