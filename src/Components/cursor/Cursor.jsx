import { motion } from "framer-motion"

const Cursor = ({cursorVariant, x, y}) => {

  const pointerVariants = {
    default: {
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

  return(
    <>
      <motion.div
        className="fixed top-0 left-0 z-[1000] border-white border rounded-full pointer-events-none"
        animate={cursorVariant}
        variants={pointerVariants}
      />
    </>

  )
}

export default Cursor
