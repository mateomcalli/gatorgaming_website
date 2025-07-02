import { LuX } from 'react-icons/lu'

const AboutTopLines = () => {
  return (
    <div className='flex items-center pl-15 h-15'>
      <LuX size='40'/>
      <div className='gap-y-4 flex flex-col w-[85%] h-10 ml-8'>
        <div className='h-[3px] w-40 self-end mr-50 bg-ggwhite'/>
        <div className='h-[3px] w-full bg-ggwhite'/>
      </div>
    </div>
  )
}

export default AboutTopLines