import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Componente Card
const Card = ({ children, className }) => {
  return <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>{children}</div>;
};

// Componente CardContent
const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// Componente Button mejorado
const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

// Mensajes y emojis por día de la semana
const mensajes = {
  0: { texto: "Espero que este domingo te permita recargar energías para la semana. ¡Mucho éxito en todo lo que hagas!", emoji: "🌺✨🌴" },
  1: { texto: "¡Que tengas un lunes productivo y lleno de logros! No olvides que cada día es una nueva oportunidad.", emoji: "👑🌷🚀" },
  2: { texto: "Martes es un gran día para seguir avanzando. ¡Mucho ánimo y éxito en lo que hagas!", emoji: "🌻🧚‍♂️🌎" },
  3: { texto: "Miércoles ya estamos a mitad de la semana. ¡Sigue con la misma energía!", emoji: "💐🌟✈️" },
  4: { texto: "Jueves, un paso más cerca del fin de semana. ¡Que tengas un gran día!", emoji: "🏵️✨🌍" },
  5: { texto: "¡Feliz viernes! Cierra la semana con éxito y con la satisfacción de haber dado lo mejor.", emoji: "🌹🧚‍♀️🛫" },
  6: { texto: "Sábado es perfecto para equilibrar trabajo y descanso. ¡Disfruta el día!", emoji: "💮👸🏝️" }
};

// Lista de palabras mágicas con descripciones
const palabrasSecretas = {
  "hada": "Un ser mágico con alas y polvo encantado.",
  "flor": "Una hermosa creación de la naturaleza con pétalos coloridos.",
  "corona": "Un símbolo de realeza y grandeza.",
  "viaje": "Una aventura a un lugar nuevo y emocionante.",
  "estrella": "Un cuerpo celeste que brilla en el cielo nocturno.",
  "brillo": "Reflejo de luz que ilumina todo a su alrededor.",
  "encanto": "Un magnetismo especial que cautiva a todos."
};

// Mini juego mejorado con funcionalidad adicional
const MiniJuego = ({ onWin }) => {
  const [guess, setGuess] = useState("");
  const [secretWord, setSecretWord] = useState(Object.keys(palabrasSecretas)[Math.floor(Math.random() * Object.keys(palabrasSecretas).length)]);
  const [winCount, setWinCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState(`Pista: ${palabrasSecretas[secretWord]}`);
  const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    if (guess.toLowerCase() === "claudia") {
      setFeedback("Eres increíble y especial. Siempre hay algo brillante en tu día. ✨");
      return;
    }
    if (guess.toLowerCase() === secretWord) {
      setWinCount(winCount + 1);
      setFeedback("¡Felicidades! Has acertado 🎉");
      const newWord = Object.keys(palabrasSecretas)[Math.floor(Math.random() * Object.keys(palabrasSecretas).length)];
      setSecretWord(newWord);
      setHint(`Pista: ${palabrasSecretas[newWord]}`);
      onWin(winCount + 1);
      setGuess("");
      setAttempts(0);
    } else {
      setAttempts(attempts + 1);
      setFeedback("Casi lo aciertas, inténtalo de nuevo. ¡Seguro lo lograrás! 🔄");
      if (attempts < secretWord.length) {
        setHint(`La palabra empieza con: ${secretWord.substring(0, attempts + 1)}. Pista: ${palabrasSecretas[secretWord]}`);
      }
    }
  };

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-700 font-semibold">Adivina la palabra mágica:</p>
      <p className="text-sm text-gray-600">{hint}</p>
      <input 
        type="text" 
        className="border p-2 rounded-md mt-2 w-full" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)}
      />
      <Button onClick={handleCheck} className="mt-3">Comprobar</Button>
      {feedback && <p className="mt-2 text-blue-600">{feedback}</p>}
    </div>
  );
};

// Componente principal
export default function DetalleEspecial() {
  const [showGame, setShowGame] = useState(false);
  const today = new Date().getDay();
  const mensajeDelDia = mensajes[today];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-4xl font-bold text-center">
        Hola Claudia {mensajeDelDia.emoji}
      </h2>
      <Card className="max-w-xl w-full text-center bg-gray-800">
        <CardContent>
          <p className="text-lg mb-4">{mensajeDelDia.texto}</p>
          <Button onClick={() => setShowGame(!showGame)}>
            {showGame ? "Ocultar juego" : "Jugar de nuevo"}
          </Button>
        </CardContent>
      </Card>
      {showGame && <MiniJuego onWin={() => setShowGame(false)} />}
    </div>
  );
}
