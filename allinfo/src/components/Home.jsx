import React from 'react'
import News from './News'
import {motion} from 'framer-motion'
import '../index.css'
const Home = () => {
  return (
    <div>
        <motion.h1 animate={{
            opacity:1,
            y:20
        }}
        initial={{
            opacity:0
        }}
        transition={{
            type:'spring',
            duration:30
        }}
        style={{textAlign:'center'}}>Welcome to News Search</motion.h1>
        <News/>
    </div>
  )
}

export default Home