import { FaArrowRightLong } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className = 'test-blue justify-start flex w-2/3 h-screen'>
      <div className='test-red w-2/3 pt-10 sm:pt-15 md:pt-20 lg:pt-30 font-display sm:pl-2 md:pl-5 lg:pl-10'>
        <p className='text-ggwelcome text-2xl pb-3'>
          Welcome to Gator Gaming!
        </p>
        <h1 className='text-ggwhite font-bold text-5xl leading-tight'>
          We're UF's student-led gaming club, committed to hosting community events that are completely free for all players.
        </h1>
        <p className='text-ggorange py-8 text-lg'>
          Level Up Together: Your Ultimate Campus Gaming Community
        </p>
        <button className='bg-ggorange text-ggwhite rounded-3xl h-10 flex justify-between gap-5 px-5 items-center' type='button'>
          Discord <div className='flex items-center justify-center rounded-full bg-ggbg h-8 w-8'><FaArrowRightLong className='text-lg items-center justify-center flex'/></div>
        </button>
      </div>
    </div>
  )
}

export default Home