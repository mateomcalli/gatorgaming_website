const AffiliatedClubs = ({ minLg }) => {
  const clubs = [
    {name: 'GatorVR', image: 'about/gatorvr.png'},
    {name: 'U.R.G.E', image: 'about/urge.png'},
    {name: 'GatorJam', image: 'about/gatorjam.png'}
  ]

  return (
    <>
      <div className='test-red mt-30 flex flex-col justify-center min-h-fit gap-y-8 w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
        <p className='text-4xl text-ggwhite font-display text-center'>Affiliated Clubs:</p>
        {minLg &&
          <>
            <div className='flex justify-around text-center min-h-fit w-full'>
              {clubs.map(club => (
                <div className='w-fit h-fit flex flex-col gap-y-2'>
                  <p className='text-lg text-ggwhite font-display'>
                    {club.name}
                  </p>
                  <img className='w-60 h-60 xl:w-70 xl:h-70 rounded-3xl drop-shadow-md drop-shadow-ggorange' src={club.image}/>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </>
  )
}

export default AffiliatedClubs