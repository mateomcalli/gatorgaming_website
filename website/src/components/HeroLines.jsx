import { LuX } from 'react-icons/lu'

const HeroLines = () => {
  return (
    <div className='mr-10 flex flex-col'>
      <div className='z-2 w-6 flex flex-row items-center justify-between h-fit'>
        <div className='lg:w-[3px] lg:h-30 lg:mb-75 lg:bg-[#d9d9d9]'/>
        <div className ='lg:w-[3px] lg:h-130 lg:bg-[#d9d9d9]'/>
      </div>
    <LuX size={45} className='mt-3'/>
    </div>
  )
}

export default HeroLines