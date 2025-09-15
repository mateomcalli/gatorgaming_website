const CardBack = ({ favoriteGames, aboutMe, flipped, setFlipped, hovered }) => {
  return (
    <div className='absolute backface-hidden rotate-y-180 flex-shrink-0 flex flex-col rounded-xl w-full h-full border-solid border-8 border-ggorange bg-black'>
      <div className='text-wrap flex flex-col gap-y-2 p-5 h-fit w-full'>
        <p className='text-xl text-ggorange font-display'>Favorite game(s):</p>
        <p className='text-lg text-ggwhite font-display'>{favoriteGames}</p>
      </div>
      <div className='text-wrap flex flex-col gap-y-2 p-5 h-fit w-full'>
        <p className='text-xl text-ggorange font-display'>About me:</p>
        <p className='text-lg text-ggwhite font-display'>{aboutMe}</p>
      </div>
      <img 
        onClick={() => setFlipped(!flipped)}
        className={`${hovered ? 'visible' : 'hidden'} absolute cursor-pointer -right-[19px] -bottom-[16px]`}
        src='/team/bent-corner3.png'
        alt='Bent corner asset'
      />
    </div>
  )
}

export default CardBack