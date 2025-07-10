import Card from "../../components/Card"
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';

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
      <SimpleBar 
        className='h-120'
        style={{ maxHeight: '460px', maxWidth: '1038px' }}
      >
        <div className='relative px-5 flex gap-x-12'>
          {members.map(member => (
            <Card key={member.id} name={member.name} position={member.position}/>
          ))}
        </div>
      </SimpleBar>
    </div>
  )
}

export default TeamContent