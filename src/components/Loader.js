import React from 'react'
import {motion, useCycle} from 'framer-motion'

const loaderVariants ={
  animationOne:{
    x: [-20,20],
    y: [0, -30],
    transition: {
      x:{
        yoyo: Infinity,
        duration: .5
      },
      y:{
        yoyo: Infinity,
        duration: .25,
        ease: 'easeInOut'
      }
    }
  },
  animationTwo:{
    y: [0, -40],
    x: 0,
    transition:{
      y:{
        yoyo: Infinity,
        duration: .25,
        ease: 'easeOut'
      }
    }
  }
}
const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <div>
      <motion.div className="loader"
       variants={loaderVariants}
       animate={animation}
      >
      </motion.div>
      <div className="cycle-loader" onClick={() => cycleAnimation()}>Cycle loader</div>
      
    </div>
  )
}

export default Loader
