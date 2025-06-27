import { LuX } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='relative w-screen h-80 flex justify-center z-2'>
      <div className='mx-8 w-full md:w-169 lg:w-205 xl:w-240 2xl:w-324 flex flex-col z-2'>
        <div className='flex h-fit w-full items-center gap-5'>
          <LuX size='40'/>
          <div className='h-[1px] w-[79%] bg-ggwhite'/>
          <p className='text-ggwhite text-sm font-display text-nowrap'>Thanks for visiting</p>
        </div>
        <div className='flex justify-between'>
          <img
            src='gatorgaming-logo.png'
            className='w-28'
          />
          <img
            src='gud-logo.png'
            className='mt-2 w-20 h-20'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer