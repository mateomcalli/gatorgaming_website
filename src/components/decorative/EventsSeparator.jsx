import { LuX } from 'react-icons/lu'

const EventsSeparator = () => {
  return (
    <div className='self-center pb-10 flex relative items-center w-[85%] h-15 z-2'>
      <div className='pt-4 mx-5 gap-y-4 flex flex-col w-full h-10'>
        <div className='h-[3px] w-full bg-ggwhite'/>
        <div className='h-[3px] w-40 ml-16 bg-ggwhite'/>
      </div>
      <LuX className='mr-3' size='40'/>
    </div>
  )
}

export default EventsSeparator