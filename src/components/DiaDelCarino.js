import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente Card
const Card = ({ children, className }) => {
  return <div className={`bg-white shadow-2xl rounded-3xl p-6 ${className}`}>{children}</div>;
};

// Componente CardContent
const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// Componente Button
const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

// Componente del muñequito vestido de traje entregando flores a un hada
const CharacterGivingFlowers = () => {
  return (
    <motion.div
      className="relative w-40 h-40 flex items-center justify-center"
      animate={{ x: [0, 200, 0], y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {/* Muñequito con traje */}
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          😊
        </div>
        <div className="w-16 h-24 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
          🤵
        </div>
      </div>
      
      {/* Ramo de flores */}
      <div className="absolute top-6 left-14 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md">
        🌸🌸🌸🌸🌸
      </div>

      {/* Hada */}
      <motion.div 
        className="absolute top-0 left-40 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
          🧚🧚🧚
        </div>
        <div className="w-16 h-24 bg-purple-400 rounded-lg flex items-center justify-center shadow-md">
          ✨
        </div>
      </motion.div>
    </motion.div>
  );
};

// Componente principal
export default function DetalleEspecial() {
  const [showMessage, setShowMessage] = useState(false);
  
  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-rose-200 p-4">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-center">
        Hola Claudia 🌷
      </h2>
      <Card className="max-w-xl w-full text-center">
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
          "¡Hola! Espero que tu estudio vaya bien hoy. Seguro que lo estás haciendo genial. ¡Mucho ánimo!" 😊
          </p>
          <div className="mt-6">
            <Button onClick={handleButtonClick}>
              🌼 Presiona  🌼
            </Button>
          </div>
        </CardContent>
      </Card>
      {showMessage && (
        <div className="flex flex-col items-center mt-8 transition-all duration-1000">
          <CharacterGivingFlowers />
        </div>
      )}
      <p className="text-xs text-gray-600 mt-10">© Alexander Echeverría</p>
    </div>
  );
}
