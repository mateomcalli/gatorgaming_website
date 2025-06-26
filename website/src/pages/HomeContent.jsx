import SkillsList from '../components/SkillsList'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useMediaQuery } from 'react-responsive'
import { FaPlus } from "react-icons/fa6";

const HomeContent = ( {minXl} ) => {
  const maxSm = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      <div className='relative justify-center flex z-2'>
        <div className='md:grid md:grid-cols-2 md:grid-rows-[1fr_1fr] md:gap-x-15 lg:gap-y-10 md:w-180 lg:w-215 xl:w-250 2xl:w-332'>
          <div className='w-3/5 md:w-auto place-self-center xl:mt-4 xl:place-self-stretch flex flex-col gap-8 h-fit'>
            <img 
              className="aspect-auto z-2"
              src="home/home-players.png"
            />
          </div>
          <div className='w-3/4 md:w-auto m-auto text-center md:text-left items-center md:items-start xl:pl-10 md:justify-center flex flex-col'>
            {!maxSm && <a href='#about-start'><p className='text-lg xl:text-xl pb-3 text-ggwhite font-display scroll-m-30' id='about-start'>Who are we?</p></a>}
            <p className='pt-4 md:pt-0 text-2xl xl:text-3xl pb-2 font-bold text-ggwhite font-display'>We Always Make Epic Plays</p>
            <p className='text-md xl:text-lg text-ggwhite font-display'>We’re a passionate gaming community dedicated to uniting players of all skill levels—whether you’re here to dominate tournaments, squad up with friends, or just have a good time. Join us and level up your gaming experience!</p>
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
          {!maxSm && // disabled when width < 768px
            <div className='pl-6 2xl:-mt-0 xl:pl-6'>
              <p className='pb-2 text-2xl xl:text-3xl text-ggwhite font-display'>
              Our Skills
              </p>
              <p className='w-[95%] pb-2 text-md text-ggorange font-display'>
                We're known for tactical brilliance, unstoppable synergy, and fearless competition — our skills speak for themselves.
              </p>
              <SkillsList/>
            </div>
          }
          <div className='px-8 pt-6 mt-8 md:px-0 md:pt-0 lg:mt-0 flex flex-row text-center'>
            <div className='pr-0 xl:pr-5 w-1/2 flex flex-col text-ggwhite font-display'>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Competition
              </p>
              <p className='text-sm xl:text-md px-5 pb-12 text-ggorange font-display'>
                For the thrill of the game — from intense tournaments to friendly matches.
              </p>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Community
              </p>
              <p className='text-sm xl:text-md px-5 text-ggorange font-display'>
                A space where friendships are formed, online and off.
              </p>
            </div>
            <div className='w-1/2 pr-0 xl:pl-5 flex flex-col text-ggwhite font-display'>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Collaboration
              </p>
              <p className='text-sm xl:text-md px-5 pb-12 text-ggorange font-display'>
                Teamwork makes the dream work — we are always open to new ideas and input.
              </p>
              <p className='text-xl xl:text-2xl text-ggwhite font-display'>
                Creativity
              </p>
              <p className='text-sm xl:text-md px-5 text-ggorange font-display'>
                Show off your skills, memes, montages, or cosplay.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* start of faq section */}
      <div className='w-screen h-screen flex bg-no-repeat bg-[url(home/faq-bg3.png)] bg-[calc(50%-150px)_-60px] justify-center'>
        <div className='pt-35 h-fit gap-10 w-full md:w-180 lg:w-215 xl:w-250 2xl:w-332 flex text-center'>
          <div className='px-5 w-full xl:w-1/2'>
            <p className='pb-8 text-2xl sm:text-3xl lg:text-4xl font-display z-2 font-bold'>FAQ</p>
            <div className='pb-3'>
              <div className='flex items-center gap-5 pb-3'>
                <FaPlus size='24' />
                <p className='text-md sm:text-lg font-display'>How do I join Gator Gaming?</p>
                {/* <motion.div>

                </motion.div> */}
              </div>
              <div className='h-[1px] bg-ggwhite' />
            </div>
            <div className='pb-3'>
              <div className='flex items-center gap-5 pb-3'>
                <FaPlus size='24' />
                <p className='text-md sm:text-lg font-display'>How can I get involved with Gator Gaming?</p>
              </div>
              <div className='h-[1px] bg-ggwhite' />
            </div>
            <div className='pb-3'>
              <div className='flex items-center gap-5 pb-3'>
                <FaPlus size='24' />
                <p className='text-md sm:text-lg font-display'>What events does Gator Gaming host?</p>
              </div>
              <div className='h-[1px] bg-ggwhite' />
            </div>
          </div>
          {minXl &&
          <div className='w-fit'>
            <img 
              className="rounded-3xl aspect-auto z-2"
              src="home/faq-image.png"
            />
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default HomeContent