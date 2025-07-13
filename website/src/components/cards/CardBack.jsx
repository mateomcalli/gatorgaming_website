const CardBack = ({ flipped, setFlipped, hovered }) => {
  return (
    <div className='absolute backface-hidden rotate-y-180 flex-shrink-0 flex flex-col rounded-xl w-full h-full border-solid border-8 border-ggorange bg-black'>
      <div className='text-wrap flex flex-col gap-y-2 p-5 h-fit w-full'>
        <p className='text-xl text-ggorange font-display'>Favorite game(s):</p>
        <p className='text-lg text-ggwhite font-display'>Mario Kart 7</p>
      </div>
      <div className='text-wrap flex flex-col gap-y-2 p-5 h-fit w-full'>
        <p className='text-xl text-ggorange font-display'>What I do:</p>
        <p className='text-lg text-ggwhite font-display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo felis, condimentum nec efficitur vel, placerat eget nulla. Suspendisse potenti. Praesent lacinia.</p>
      </div>
      <img onClick={() => setFlipped(!flipped)} className={`${hovered ? 'visible' : 'hidden'} absolute cursor-pointer -right-[19px] -bottom-[16px]`} src='/team/bent-corner3.png'/>
    </div>
  )
}

export default CardBack