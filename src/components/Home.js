import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container"
     animate={
       {
         rotateZ: 180,
         opacity: 0.2,
         marginTop: 200,
       }
     }
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
         animate={
           {scale: 1.2, 
          }
         }
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;