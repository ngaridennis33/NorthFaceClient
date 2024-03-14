"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react'

interface MobileSwipperProps {
  children: React.ReactNode;
  onSwipe: (delta: { deltaX: number}) => void;  
}
export const MobileSwipper = ({children, onSwipe}: MobileSwipperProps ) => {
  const wrapperRef = useRef<HTMLDivElement>(null); 
  const [startX, setStartX] = useState(0);

useEffect(() => {
  const handleTouchStart = (e: TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      return;
    }
    e.preventDefault();
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      return;
    }
    e.preventDefault();
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (Math.abs(deltaX) > 50) { // Minimum swipe distance threshold
      onSwipe({ deltaX });
    }
  };

  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchend", handleTouchEnd);

  return () => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, [startX, onSwipe]);


  return (
    <div ref={wrapperRef}>{children}</div>
  )
}