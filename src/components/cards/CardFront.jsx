const CardFront = ({ name, position, hp, picture, flipped, setFlipped, hovered }) => {
  const smallerFont = name.length > 18
  const optimizeURLs = (url) => {
    return url.replace('/upload/', `/upload/f_auto/q_auto/`)
  }
  return (
    <div className='absolute flex-shrink-0 flex flex-col rounded-xl w-full h-full border-solid border-8 border-ggorange bg-black'>
      <div className='flex pb-1 justify-between pt-[3px] pl-[10px]'>
        <p className={smallerFont
          ? `text-md font-display text-ggwhite`
          : `text-lg font-display text-ggwhite`
        }>
          {name}
        </p>
        <div className='flex gap-x-1 pr-1'>
          <p className='text-[10px] pt-[10px] font-display'>HP</p>
          <p className='font-display text-[18px]'>{hp}</p>
          <img className='pointer-events-none border-1 rounded-full border-ggwhite w-6.5' src='gatorgaming-logo.png'/>
        </div>
      </div>
      <div className='mx-[10px] w-[264px] h-[155px] border-1 border-[#9F9F9F]'>
        <img className='w-full h-full pointer-events-none object-cover' src={optimizeURLs(picture)}/>
      </div>
      <div className='flex mt-4 mx-[6px] gap-x-2'>
        <img className='pointer-events-none min-w-22 object-contain h-fit self-center' src='/team/card-ability.png'/>
        <p className='text-ggorange text-lg font-display text-nowrap'>{position}</p>
      </div>
      <img className='pointer-events-none w-40 opacity-25 self-center -mt-0' src='gatorgaming-logo.png'/>
      <img onClick={() => setFlipped(!flipped)} className={`${hovered ? 'visible' : 'hidden'} absolute cursor-pointer -right-[19px] -bottom-[16px]`} draggable={false} src='/team/bent-corner3.png'/>
    </div>
  )
}

export default CardFront