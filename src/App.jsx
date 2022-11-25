import { useEffect, useState } from 'react'
import Cursor from './Components/cursor/Cursor'
import { useCursorContext } from './context/CursorContext'
import { Hero } from './sections/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  const {mousePosition, setCursor, cursorVariant } = useCursorContext()

  const {x , y} = mousePosition;

  return (
    <>
      <Hero />
      <Cursor cursorVariant={cursorVariant} x={x} y={y} /> 

    </>
  )
}

export default App
