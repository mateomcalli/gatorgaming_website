const SmallCard = ({ name, picture }) => {
  return (
    <div className='w-[265px] h-95 flex flex-col relative bg-black border-solid border-5 border-ggorange rounded-xl'>
      <div className='flex pb-1 justify-between pt-[3px] pl-[10px]'>
        <p className='text-lg font-display text-ggwhite'>{name}</p>
        <img className='pointer-events-none border-1 rounded-full border-ggwhite w-6.5 mr-2 mt-[1px]' src='gatorgaming-logo.png'/>
      </div>
      <img className='pointer-events-none mx-[8px] border-1 border-[#9F9F9F]' src={picture}/>
      <img className='pointer-events-none w-24 opacity-40 self-center mt-[38px]' src='gud-logo1.png'/>
    </div>
  )
}

export default SmallCard