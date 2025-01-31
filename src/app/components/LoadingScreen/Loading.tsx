import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // End the loading after 1 second
    }, 1000); // Matches the loading bar duration

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="w-full h-full z-[200] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Centered, rounded, blurred background with transparency */}
        <img
          src="/images/Loading.gif"
          alt="Loading"
          className="w-1/2 h-auto  bg-[#220719] rounded-xl"
        />
        
        <img
        src="/images/pb.webp"
        alt="Loading"
        className='w-1/2 h-20 '
        />
      </div>
    </div>
  );
};

export default Loading;
