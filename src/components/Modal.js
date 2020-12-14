import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop ={
  hidden: { opacity:0},
  visible: { opacity: 1}
}

const modalVariants = {
  hidden: { opacity: 0, y: '-100vh'},
  visible: { 
    opacity: 1, 
    y: '200px',
    transition: {
      delay: .5,
      duration : .2
    }
  }

}
const Modal = ({showModal, setShowModal}) =>{
  
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="backDrop"
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className="modal"
            variants={modalVariants}
          >
            <p>Want to make another pizza?</p>
            <Link to='/'>
            <button >Start Again</button>
            </Link>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;