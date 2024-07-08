// components/ui/ScrollAnimation.js
'use client';
import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ totalFrames }) => {
  
const currentFrame = index => (
  ``
);

const images = []
const airpods = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
  return (
    <div ref={containerRef} style={{ height: '100vh' , position : 'fixed'}}>
      <img
        src={`/images/animatedshow/ezgif-frame-0${String(currentFrame)}.jpg`}
        alt={`Frame ${currentFrame}`}
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ScrollAnimation;
