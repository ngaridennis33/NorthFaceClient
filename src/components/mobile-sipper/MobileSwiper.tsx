"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react'

interface MobileSwipperProps {
  children: React.ReactNode;
  onSwipe: (delta: { deltaX: number, deltaY: number }) => void;  
}
export const MobileSwipper = ({children, onSwipe}: MobileSwipperProps ) => {
  const wrapperRef = useRef<HTMLDivElement>(null); 
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  // Set the starting position of the users finger
  const handleTouchStart = useCallback((e:TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)){
      return
    }
    e.preventDefault();

    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
  },[])


  // set the final position of the user's finger
  const handleTouchEnd = useCallback((e:TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)){
        return
    }
    
    e.preventDefault()
    
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = endX - startX
    const deltaY = endY - startY

    onSwipe({ deltaX, deltaY })
  }, [startX, startY, onSwipe])

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)
    
    return () => {
        window.removeEventListener("touchstart", handleTouchStart)
        window.removeEventListener("touchend", handleTouchEnd)
    }
}, [handleTouchStart, handleTouchEnd]);

  return (
    <div ref={wrapperRef}>{children}</div>
  )
}