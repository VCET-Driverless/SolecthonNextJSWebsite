'use client'
import React, { useEffect, useState } from 'react';

const ScrollLogger = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection('Scrolling Down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('Scrolling Up');
    } else {
      setScrollDirection(''); // Reset if not scrolling
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Set the last scroll position to the current scroll position
    setLastScrollY(window.scrollY);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

  
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px', position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        border: '2px solid #000',
        backgroundColor: '#fff',
        zIndex: 1000,
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
      }}>
        <h2>{scrollDirection || 'Scroll to see updates'}</h2>
      </div>
      <p>Keep scrolling up and down!</p>
    </div>
  );
};

export default ScrollLogger;