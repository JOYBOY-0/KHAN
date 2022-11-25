// context to handle cursor 

import { createContext, useContext, useEffect, useState } from 'react'

export const CursorContext = createContext(null)

export const useCursorContext = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, followX : 0, followY : 0 });
    
    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const followX = ((window.innerWidth - event.pageX)/100);
        const followY = ((window.innerHeight - event.pageY)/100);
        setMousePosition({ x: clientX, y: clientY, followX : followX, followY : followY });
      };
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    const [cursorVariant, setCursorVariant] = useState('default')
    
    const setCursor = (variant) => {
        setCursorVariant(variant)
    }
    
    
    return (
        <CursorContext.Provider value={{ cursorVariant, setCursor, mousePosition }}>
            {children}
        </CursorContext.Provider>
    )
}

