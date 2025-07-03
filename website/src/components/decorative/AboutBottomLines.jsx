import { LuX } from 'react-icons/lu'

const AboutBottomLines = () => {
  return (
    <div className='flex items-center pl-15 h-15'>
      <div className='pt-4 mr-8 gap-y-4 flex flex-col w-[80%] h-10 ml-8'>
        <div className='h-[3px] w-full bg-ggwhite'/>
        <div className='h-[3px] w-40 ml-20 bg-ggwhite'/>
      </div>
      <LuX size='40'/>
    </div>
  )
}

export default AboutBottomLines