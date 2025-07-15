const CardFront = ({ flipped, setFlipped, name, position, hovered }) => {
  return (
    <div className='absolute text-nowrap flex-shrink-0 flex flex-col rounded-xl w-full h-full border-solid border-8 border-ggorange bg-black'>
      <div className='flex pb-1 justify-between pt-[3px] pl-[10px]'>
        <p className='text-lg font-bold font-display text-ggwhite'>{name}</p>
        <div className='flex gap-x-1 pr-1'>
          <p className='text-[10px] pt-[10px] font-display'>HP</p>
          <p className='font-display text-[18px]'>130</p>
          <img className='pointer-events-none border-1 rounded-full border-ggwhite w-6.5' src='gatorgaming-logo.png'/>
        </div>
      </div>
      <img className='pointer-events-none mx-[10px] border-1 border-[#9F9F9F]' src='/people/mateo-m.png'/>
      <div className='flex mx-[6px] gap-x-2'>
        <img className='pointer-events-none pt-4 min-w-22 object-contain h-auto' src='/team/card-ability.png'/>
        <p className='pt-4 text-wrap text-ggorange text-lg font-display'>{position}</p>
      </div>
      <img className='pointer-events-none w-40 opacity-25 self-center -mt-0' src='gatorgaming-logo.png'/>
      <img onClick={() => setFlipped(!flipped)} className={`${hovered ? 'visible' : 'hidden'} absolute cursor-pointer -right-[19px] -bottom-[16px]`} src='/team/bent-corner3.png'/>
    </div>
  )
}

export default CardFront