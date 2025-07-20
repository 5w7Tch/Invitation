import React, { useState, useEffect } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [denyButtonPosition, setDenyButtonPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);

  const handleLetterClick = () => {
    setIsOpen(true);
    setTimeout(() => setShowInvitation(true), 1000);
  };

  const handleAccept = () => {
    // Generate hearts
    const newHearts = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        delay: i * 100
      });
    }
    setHearts(newHearts);

    // Send email using mailto
    // const subject = encodeURIComponent('Invitation Accepted! 💕');
    // const body = encodeURIComponent('The invitation has been accepted! See you at the special evening ❤️\n\nDate: Saturday, August 2\nTime: 6:00 PM\nLocation: Vera Italiana, 49 I, Iakob Gogebashvili Street');
    // window.location.href = `mailto:nurch22@freeuni.edu.ge?subject=${subject}&body=${body}`;

    // Reset after animation
    setTimeout(() => {
      setIsOpen(false);
      setShowInvitation(false);
      setHearts([]);
    }, 3000);
  };

  const handleDenyHover = () => {
    const randomX = (Math.random() - 0.5) * 500;
    const randomY = (Math.random() - 0.5) * 300;
    setDenyButtonPosition({ x: randomX, y: randomY });
  };

  // Clean up hearts after animation
  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts([]);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-6xl animate-float-up"
          style={{
            left: `${heart.x}px`,
            bottom: '-100px',
            animationDelay: `${heart.delay}ms`,
            color: ['#ff69b4', '#ff1493', '#ff6b6b', '#ee5a6f', '#e63946'][Math.floor(Math.random() * 5)]
          }}
        >
          ❤️
        </div>
      ))}

      {!showInvitation ? (
        <div className="relative">
          {/* Door Frame */}
          <div className="relative w-80 h-96 bg-gradient-to-br from-amber-800 to-amber-900 rounded-t-full p-4 shadow-2xl" style={{perspective: '1000px'}}>
            {/* Add shadow effect for door opening */}
            <div className="absolute inset-0 bg-black/20 rounded-t-full" style={{
              clipPath: 'polygon(0 0, 15% 0, 15% 100%, 0 100%)',
              opacity: isOpen ? 0.5 : 0.3
            }} />
            
            {/* Letter behind door */}
            <div
              className={`absolute bottom-12 transform cursor-pointer transition-all duration-300 hover:translate-x-8 hover:translate-y-[-20px] ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handleLetterClick}
              style={{
                zIndex: 0,
                right: '-40px'
              }}
            >
              <div className="relative">
                {/* Envelope */}
                <div className="w-32 h-24 bg-gradient-to-br from-pink-100 to-pink-200 relative shadow-lg">
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[40px] border-t-pink-300" />
                  {/* Letter peeking out */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gradient-to-br from-rose-50 to-rose-100 shadow-md flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-rose-600 font-serif">Invitation</div>
                    </div>
                  </div>
                </div>
                {/* Floating hearts */}
                <div className="absolute -top-8 left-3/4 transform -translate-x-1/2">
                  <div className="text-pink-500 animate-bounce text-3xl">♥</div>
                </div>
              </div>
            </div>
            {/* Door */}
            <div 
              className={`relative w-full h-full bg-gradient-to-br from-amber-700 to-amber-800 rounded-t-full transition-all duration-1000 transform-gpu ${
                isOpen ? 'rotate-y-180' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
                transform: isOpen ? 'perspective(1000px) rotateY(-90deg)' : 'perspective(1000px) rotateY(-15deg)',
                zIndex: 1
              }}
            >
              {/* Door details */}
              <div className="absolute inset-4 border-2 border-amber-600 rounded-t-full">
                <div className="absolute top-1/2 right-4 w-3 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative max-w-2xl w-full mx-4 animate-fade-in">
          {/* Invitation Card */}
          <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-2xl overflow-hidden">
            {/* Decorative flowers background */}
            <div className="absolute inset-0 opacity-10">
              {/* Rose patterns */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                >
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-rose-400 rounded-full" />
                    <div className="absolute inset-2 bg-rose-300 rounded-full" />
                    <div className="absolute inset-4 bg-rose-200 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 p-12 text-center">
              {/* Top decoration */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl text-rose-400">❀</div>
                  <div className="text-5xl text-rose-500">✿</div>
                  <div className="text-4xl text-rose-400">❀</div>
                </div>
              </div>

              <h1 className="text-4xl font-serif text-rose-800 mb-6">You're Invited</h1>
              
              <div className="space-y-4 text-gray-700">
                
                
                <div className="my-8 p-6 bg-white/50 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-serif text-rose-700 mb-2">საღამო</p>
                  <p className="text-lg">შაბათი, 2 აგვისტო</p>
                  <p className="text-lg">6:00 PM</p>
                  <p className="text-lg mt-2">Vera Italiana</p>
                  <p className="text-sm text-gray-600">49 I, იაკობ გოგებაშვილის ქუჩა</p>
                  <p className="text-2xl font-serif text-rose-700 mb-2"></p>
                  <p className="text-2xl font-serif text-rose-700 mb-2">Dress Code</p>
                  <p className="text-lg">"ბომჟური" ;)</p>
                </div>
                <p className="text-l font-serif font-normal italic text-rose-700 mb-2">"You are the brightest light in the darkest evening"</p>

              
                <div className="mt-8 flex justify-center gap-4 relative">
                  <button 
                    onClick={handleAccept}
                    className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-semibold hover:from-rose-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    I'll Be There ♥
                  </button>
                  <button 
                    onMouseEnter={handleDenyHover}
                    onClick={handleDenyHover}
                    style={{
                      transform: `translate(${denyButtonPosition.x}px, ${denyButtonPosition.y}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg">
                    Can't Make It
                  </button>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl text-rose-300">♥</div>
                  <div className="text-3xl text-rose-400">♥</div>
                  <div className="text-2xl text-rose-300">♥</div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="relative w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-8 bg-gradient-to-t from-green-400 to-green-300 rounded-full"
                    style={{
                      left: `${20 + i * 15}px`,
                      top: `${10 + i * 8}px`,
                      transform: `rotate(${-45 + i * 15}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="relative w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-8 bg-gradient-to-t from-green-400 to-green-300 rounded-full"
                    style={{
                      right: `${20 + i * 15}px`,
                      bottom: `${10 + i * 8}px`,
                      transform: `rotate(${45 - i * 15}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0);
          }
          10% {
            opacity: 1;
            transform: translateY(-50px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-600px) scale(0.5) rotate(360deg);
          }
        }
        
        .animate-float-up {
          animation: float-up 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;