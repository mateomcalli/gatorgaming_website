import { useState } from 'react'
import { motion } from 'framer-motion'

const Coins = ({ minLg }) => {
  const [isTriggered, setIsTriggered] = useState(false)
  
    const container1Variants = {
      hidden: {},
      visible: { 
        transition: { staggerChildren: 0.3 },
      }
    }
  
    const container2Variants = {
      hidden: {},
      visible: { 
        transition: { delayChildren: 0.9, staggerChildren: 0.3 },
      }
    }
  
    const itemVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    }
  
  return (
    <>
      {minLg && 
        <div className='test-red mt-20 flex flex-col mb-10 min-h-fit pt-0 relative w-screen md:w-180 lg:w-230 xl:w-250 2xl:w-300'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 1 }}
            variants={container1Variants}
            onAnimationStart={() => setIsTriggered(true)}
            className='justify-around flex items-end'
          >
            <motion.img
              variants={itemVariants}
              className='mb-7'
              src='/about/coin.png'
            />
            <motion.img
              variants={itemVariants}
              className='mt-27'
              src='/about/coin2.png'
            />
            <motion.img
              variants={itemVariants}
              className='mb-17'
              src='/about/coin3.png'
            />
          </motion.div>
          <motion.div
            initial='hidden'
            animate={isTriggered ? 'visible' : 'hidden'}
            variants={container2Variants}
            className='-mt-10 justify-around flex items-end'
          >
            <motion.img
              variants={itemVariants}
              className='mt-8 ml-30'
              src='/about/coin4.png'
            />
            <motion.img
              variants={itemVariants}
              className='mb-8 mr-20'
              src='/about/coin5.png'
            />
          </motion.div>
        </div>
      }
    </>
  )
}

export default Coins