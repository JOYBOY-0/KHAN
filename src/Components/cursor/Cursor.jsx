import { motion } from "framer-motion"
import './cursor.scss'
const Cursor = ({cursorVariant, x, y}) => {

  const pointerVariants = {
    default: {
      width: 48,
      height: 48,
      x: x - 24,
      y: y - 24,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    },
    waterDrop: {
      width: 48,
      height: 48,
      x: x - 24,
      y: y - 24,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    },
    plus: {
      x: x - 40,
      y: y - 40,
      transition: { type: "spring", mass: 1 },
      width: 80,
      height: 80
    }
  }

  const centerVariants = {

  }

  return(
    <>
      <motion.div
        className="fixed top-0 left-0 z-[1000] border-white
        border rounded-full pointer-events-none flex items-center justify-center"
        animate={cursorVariant}
        variants={pointerVariants}
      >
        {cursorVariant === 'waterDrop'  &&
        <>      
          <motion.div
          className=" border-white w-6 h-6 cursor-waterDrop
          border rounded-full pointer-events-none"
          animate={cursorVariant}
          variants={centerVariants}
          />

          <motion.div
          className="absolute border-white w-16 h-16 cursor-waterDrop delay-500
          border rounded-full pointer-events-none"
          animate={cursorVariant}
          variants={centerVariants}
          />
        </>
        }
      </motion.div>
    </>

  )
}

export default Cursor
