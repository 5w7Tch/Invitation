import React from 'react';
import bgImage from '../assets/floral-bg.jpg';

const InvitationPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/80 backdrop-blur p-10 rounded-xl shadow-lg max-w-xl text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">You're Invited 💌</h1>
        <p className="text-lg text-gray-800 mb-2">
          Join me for a magical evening at
        </p>
        <p className="text-2xl font-semibold text-purple-800 mb-4">Cafe de Amour</p>
        <p className="text-gray-700 mb-6">Saturday, 8:00 PM · July 27th</p>
        <p className="italic text-sm text-gray-600">Click anywhere to close</p>
      </div>
    </div>
  );
};

export default InvitationPage;
