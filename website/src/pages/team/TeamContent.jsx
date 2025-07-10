import Card from "../../components/Card"

const TeamContent = () => {
  const members = [
    {name: 'Amelia Reeves', position: 'Co-President'},
    {name: 'Matthew Grimaldi', position: 'Co-President'},
    {name: 'Wyatt Powell', position: 'Vice President'},
    {name: 'Kaiden Joy', position: 'Treasurer'},
    {name: 'Zack Philips', position: 'Secretary'},
    {name: 'Evelyn Perez', position: 'Outreach Lead'}
  ]

  return (
    <div className='relative pt-30 lg:pt-30 lg:pb-70 flex flex-col items-center w-screen min-h-screen'>
      <p className='relative text-4xl text-ggwhite font-display pb-10'>Meet our officers!</p>
      <div className='test-green relative px-5 w-259.5 h-115 flex gap-x-12 !overflow-x-scroll'>
        <div className='test-red bg-[linear-gradient(90deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] absolute h-105 left-0 w-5'></div>
        <div className='test-red bg-[linear-gradient(270deg,rgba(10,14,21,1)_0%,rgba(0,0,0,0)_100%)] absolute h-105 right-0 w-5'></div>
          {members.map(member => (
            <Card name={member.name} position={member.position}/>
          ))}
      </div>
    </div>
  )
}

export default TeamContent