import { motion } from 'framer-motion';

const AnimatedBurger = ({ isNavOpen }) => {
  const line1Variants = {
    open: {rotate: 45, translateY: 5},
    closed: {rotate: 0, translateX: 0}
  }

  const line2Variants = {
    open: {rotate: -45, translateY: -5},
    closed: {rotate: 0, translateY: 0}
  }

  return (
    <div>
      <svg width='36' height='36' viewBox='0 0 36 36'>
        <motion.path
          variants={line1Variants}
          animate={isNavOpen ? 'open' : 'closed'}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.4
          }}
          d='M8 12h20'
          stroke='#d9d9d9'
          strokeWidth='3'
          strokeLinecap='round'
          style={{ originX: '50%', originY: '50%' }}
        />
        <motion.path
          variants={line2Variants}
          animate={isNavOpen ? 'open' : 'closed'}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.4
          }}
          d='M8 22h20'
          stroke='#d9d9d9'
          strokeWidth='3'
          strokeLinecap='round'
          style={{ originX: '50%', originY: '50%' }}
        />
      </svg>
    </div>
  )
}

export default AnimatedBurger