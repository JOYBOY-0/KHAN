import React from 'react'
import { useCursorContext } from '../../context/CursorContext'
import { motion } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'
import './hero.css'

export const Hero = () => {

    // const { width, height }= useWindowSize()
    const { mousePosition } = useCursorContext()
    const { followX, followY } = mousePosition;
    console.log(followX, followY)

    return (
    <div className='w-screen h-screen bg-white flex items-center justify-center
    max-w-[100vw] max-h-[100vh] overflow-hidden relative'
    >
        <motion.img
        animate={{
            x: followX*.7,
            y: followY*.7,
            transition: { type: "spring", damping: 20, stiffness: 100 }
          }}
        className='w-full h-full object-cover object-bottom bg-pulse-small'
        src='/images/hero_bg.png'
        />
        
        <div className='absolute flex items-end justify-center pb-4'>
            <motion.img 
            className=' h-full w-[50vw] max-h-[65vh]'
            src='/images/shape_khan.svg'
            animate={{
                x: followX*1.2,
                y: followY*1.2,
                transition: { type: "spring", damping: 20, stiffness: 100 }
              }}
            />
            <motion.p className='text-[20vw] 2xl:text-[17vw] font-black text-black/0 my-auto text-center 
            bg-gradient-to-t from-stone-900 to-stone-800 bg-clip-text 
            absolute'
            animate={{
                x: followX*1.7,
                y: followY*1.7,
                transition: { type: "spring", damping: 20, stiffness: 100 }
            }}
            >
                Khan
            </motion.p>
        </div>



        <motion.img
        animate={{
            x: followX*2.7,
            y: followY*2.7,
            transition: { type: "spring", damping: 120, stiffness: 300 }
        }}
        className=' h-1/2 w-1/2 object-contain absolute blur-sm top-1/3 -left-1/3'
        src='/images/bg-cloud-1.png'
        />

        <motion.img
        animate={{
            x: followX*3.2,
            y: followY*3.2,
            transition: { type: "spring", damping: 80, stiffness: 100 }
        }}
        className='w-full object-contain absolute blur-sm top-1/3 -left-1/3'
        src='/images/bg-cloud-1.png'
        />

        <motion.img
        animate={{
            x: followX*2,
            y: followY*2,
            transition: { type: "spring", damping: 50, stiffness: 100 }
        }}
        className=' h-1/2 w-1/2 object-contain absolute blur-sm bottom-0 -right-[13%]'
        src='/images/bg-cloud-1.png'
        />

        <div className='cursor-pointer absolute bottom-10 flex flex-col items-center text-stone-900'>
            <p className='italic text-2xl md:text-3xl font-light'>Scroll <span className='font-black'>Down</span></p>
            <p className='font-thin text-xl'>A website made by JoyCo</p>
        </div>
    </div>
  )
}
