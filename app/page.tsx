'use client';

import { useState } from 'react';

export default function Home() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [noButtonSize, setNoButtonSize] = useState(1);

  const moveNoButton = () => {
    // Generar posición aleatoria
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
    
    // Hacer el botón más pequeño cada vez
    setNoButtonSize(prev => Math.max(prev - 0.1, 0.3));
  };

  const handleYes = () => {
    setShowMessage(true);
  };

  if (showMessage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-red-400 to-pink-600 p-4">
        <div className="text-center space-y-6 animate-bounce">
          <h1 className="text-6xl md:text-8xl">🎉❤️🎉</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            ¡Sabía que dirías que sí!
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl">
            ¡Feliz San Valentín! 💝
          </p>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            Eres la razón por la que cada día es especial. 
            Gracias por hacer mi mundo más brillante ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 p-4 overflow-hidden">
      {/* Corazones de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-400/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 3 + 1}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="text-center space-y-8 z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-pulse">
            💌 Pregunta Importante 💌
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-white/90">
            ¿Quieres ser mi San Valentín?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center relative mt-12">
          {/* Botón Sí */}
          <button
            onClick={handleYes}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-110 transition-all duration-200 hover:shadow-green-500/50"
          >
            ¡Sí! 💖
          </button>

          {/* Botón No que se escapa */}
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="bg-red-500 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-2xl transition-all duration-300 hover:shadow-red-500/50"
            style={{
              position: noButtonPosition.x === 0 ? 'relative' : 'fixed',
              left: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.x}px`,
              top: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.y}px`,
              transform: `scale(${noButtonSize})`,
            }}
          >
            No
          </button>
        </div>

        <p className="text-lg text-white/70 mt-8 max-w-md mx-auto">
          Piénsalo bien... 😉
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
