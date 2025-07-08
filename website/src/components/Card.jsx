const Card = () => {
  return (
    <div className='text-nowrap flex flex-col rounded-xl w-70 h-90 border-solid border-8 border-ggorange bg-black'>
      <div className='flex pb-1 justify-between pt-[3px] pl-[10px]'>
        <p className='text-lg font-bold font-display text-ggwhite'>Mateo McAllister</p>
        <div className='flex gap-x-1 pr-1'>
          <p className='text-[10px] pt-[10px] font-display'>HP</p>
          <p className='font-display text-[18px]'>130</p>
          <img className='border-1 rounded-full border-ggwhite w-6.5' src='gatorgaming-logo.png'/>
        </div>
      </div>
      <img className='mx-[10px] border-1 border-[#9F9F9F]' src='/people/mateo-m.png'/>
      <div className='flex mx-[6px] gap-x-2'>
        <img className='pt-4 min-w-22 object-contain h-auto' src='/team/card-ability.png'/>
        <p className='pt-4 text-ggorange text-lg font-display'>Co-President</p>
      </div>
      <img className='w-30 opacity-25 self-center -mt-2'src='gatorgaming-logo.png'/>
    </div>
  )
}

export default Card