import SkillsList from '../components/SkillsList'
import { FaArrowRightLong } from 'react-icons/fa6';

const HomeContent = () => {
  return (
    <div className='justify-center flex z-2'>
      <div className='flex gap-15 w-315 h-screen z-1'>
        <div className='flex flex-col gap-8 min-w-100 w-158'>
          <img 
            className="aspect-auto rounded-3xl z-2"
            src="https://i.imgur.com/jQxoy3E.png"
          />
          <div className='pl-5 z-2'>
            <p className='pb-2 text-3xl text-ggwhite font-display z-2'>
              Our Skills
            </p>
            <p className='w-[95%] pb-2 text-md text-ggorange font-display'>
              We're known for tactical brilliance, unstoppable synergy, and fearless competition — our skills speak for themselves.
            </p>
            <SkillsList/>
          </div>
        </div>
        <div className='flex pt-3 gap-13 flex-col min-w-100 w-158 z-1'>
          <div>
            <a href='#about-start'><p className='text-xl pb-3 text-ggwhite font-display scroll-m-30' id='about-start'>Who are we?</p></a>
            <p className='text-3xl pb-2 font-bold text-ggwhite font-display'>We Always Make Epic Plays</p>
            <p className='text-lg text-ggwhite font-display'>We’re a passionate gaming community dedicated to uniting players of all skill levels—whether you’re here to dominate tournaments, squad up with friends, or just have a good time. Join us and level up your gaming experience!</p>
            <div className='flex gap-5 pt-8 font-display'>
              <a
                href="https://discord.com/invite/s99axhqQac"
                target="_blank"
                rel="noopener noreferrer"
                className="z-3 flex justify-between w-fit px-5 h-10 items-center bg-ggorange text-ggwhite rounded-3xl darken"
              >Events
                <div className="flex items-center justify-center rounded-full bg-ggbg h-8 w-8 transform translate-x-4">
                  <FaArrowRightLong className="text-lg" />
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-row text-center'>
            <div className='pr-5 w-1/2 flex flex-col text-ggwhite font-display'>
              <p className='text-2xl text-ggwhite font-display'>
                Competition
              </p>
              <p className='text-md px-5 pb-12 text-ggorange font-display'>
                For the thrill of the game — from intense tournaments to friendly matches.
              </p>
              <p className='text-2xl text-ggwhite font-display'>
                Community
              </p>
              <p className='text-md px-5 text-ggorange font-display'>
                A space where friendships are formed, online and off.
              </p>
            </div>
            <div className='w-1/2 pl-5 flex flex-col text-ggwhite font-display'>
              <p className='text-2xl text-ggwhite font-display'>
                Collaboration
              </p>
              <p className='text-md px-5 pb-12 text-ggorange font-display'>
                Teamwork makes the dream work — we are always open to new ideas and input.
              </p>
              <p className='text-2xl text-ggwhite font-display'>
                Creativity
              </p>
              <p className='text-md px-5 text-ggorange font-display'>
                Show off your skills, memes, montages, or cosplay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent