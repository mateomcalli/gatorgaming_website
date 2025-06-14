const SkillsList = () => {
  const skills = [
    {name: 'Tournament Hosting', level: 75},
    {name: 'Casual & Competitive Gaming', level: 90},
    {name: 'Community Building', level: 100}
  ]
  return (
    <>
      {skills.map(skill => (
        <div className='w-[95%] flex flex-col' key={skill.name}>
          <div className='flex justify-between'>
            <p className='py-3.5 text-md text-ggwhite font-display'>
              {skill.name}
            </p>
            <p className='py-3.5 text-md text-ggwhite font-display'>
              {skill.level}%
            </p>
          </div>
          <div className='flex w-full h-[1px]'>
            <div
              style={{width: `${skill.level}%`}}
              className='bg-ggwhite'>
            </div>
            <div
              style={{width: `${100 - skill.level}%`}}
              className=' bg-gray-700'>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SkillsList