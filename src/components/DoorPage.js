import React from 'react';
import doorImage from '../assets/door.png';
import letterImage from '../assets/letter.png';

const DoorPage = ({ onOpen }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="relative w-[300px] h-[500px] group cursor-pointer" onClick={onOpen}>
        {/* Door */}
        <img
          src={doorImage}
          alt="Door"
          className="absolute top-0 left-0 w-full h-full z-10 transition-transform duration-500 group-hover:rotate-y-12"
        />

        {/* Letter peeking */}
        <img
          src={letterImage}
          alt="Letter"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-0"
        />
      </div>
    </div>
  );
};

export default DoorPage;
