const SmallCard = ({ name, picture, role }) => {
  return (
    <div className='w-[265px] h-95 flex flex-col relative bg-black border-solid border-5 border-ggorange rounded-xl'>
      <div className='flex pb-1 justify-between pt-[3px] pl-[10px]'>
        <p className='text-lg font-display text-ggwhite'>{name}</p>
        <img className='pointer-events-none border-1 rounded-full border-ggwhite w-6.5 mr-2 mt-[1px]' src='/other/gatorgaming-logo.png' alt='Gator Gaming logo'/>
      </div>
      <img className='pointer-events-none mx-[8px] border-1 border-[#9F9F9F]' src={picture} alt={name}/>
      <div className='flex mt-4 mx-[6px] gap-x-2'>
        <img className='pointer-events-none w-20 object-contain h-fit mt-[6px]' src='/team/card-ability.png' alt='"Ability" icon'/>
        <p className='max-w-38 min-h-21 text-ggorange text-lg font-display'>{role}</p>
      </div>
      <img className='pointer-events-none w-24 opacity-40 self-center -mt-11' src='/other/gud-logo1.png' alt='Gator User Design logo'/>
    </div>
  )
}

export default SmallCard