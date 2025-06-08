import HomeButtons from '../components/HomeButtons'

const Home = () => {
  return (
    <div className = 'flex w-2/3 h-screen'>
      <div className='w-2/3 pt-10 sm:pt-15 md:pt-30 lg:pt-40 font-display sm:pl-2 md:pl-5 lg:pl-10'>
        <p className='text-ggwelcome text-2xl pb-3'>
          Welcome to Gator Gaming!
        </p>
        <h1 className='text-ggwhite font-bold text-5xl leading-tight'>
          We're UF's student-led gaming club, committed to hosting community events that are completely free for all players.
        </h1>
        <p className='text-ggorange py-8 text-lg'>
          Level Up Together: Your Ultimate Campus Gaming Community
        </p>
        <HomeButtons/>
      </div>
    </div>
  )
}

export default Home