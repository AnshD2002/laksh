import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change from useHistory to useNavigate
import '../App.css';

function Hi() {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [message, setMessage] = useState("Kesi ho?");
  const [hiddenButtons, setHiddenButtons] = useState({ fine: false, badiya: false, acchi: false });
  const [isTumSeMatlabClicked, setIsTumSeMatlabClicked] = useState(false);
  const [showAcchaJiButton, setShowAcchaJiButton] = useState(false);

  const handleFineClick = () => {
    setMessage("Bss Fine ??");
    setHiddenButtons((prev) => ({ ...prev, fine: true }));
  };

  const handleBadiyaClick = () => {
    setMessage("What? Bss Badiya ?");
    setHiddenButtons((prev) => ({ ...prev, badiya: true }));
  };

  const handleAcchiClick = () => {
    setMessage("Acchi ???, Mere bina acchi yaad ni aati kya meri ?");
    setHiddenButtons((prev) => ({ ...prev, acchi: true }));
  };

  const handleTumSeMatlabClick = () => {
    setMessage("Mujhse matlab nahi toh kisse matlab hoga QT😉");
    setHiddenButtons({ fine: true, badiya: true, acchi: true });
    setIsTumSeMatlabClicked(true);
    setShowAcchaJiButton(true);
  };

  const handleAcchaJiClick = () => {
    navigate('/confession'); // Redirect to the Confession component using navigate
  };
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-4xl font-bold text-blue-600 m-6">{message}</h1>
      <div className="grid mt-5 space-y-4">
        {/* Show Fine button if not hidden */}
        {!hiddenButtons.fine && (
          <button 
            className="p-3 text-2xl font-bold text-white bg-blue-600 rounded-2xl"
            onClick={handleFineClick}
          >
            Fine
          </button>
        )}
        {/* Show Badiya button if not hidden */}
        {!hiddenButtons.badiya && (
          <button 
            className="p-3 text-2xl font-bold text-white bg-purple-600 rounded-2xl"
            onClick={handleBadiyaClick}
          >
            Badiya
          </button>
        )}
        {/* Show Acchi Hu button if not hidden */}
        {!hiddenButtons.acchi && (
          <button 
            className="p-3 text-2xl font-bold text-white bg-red-600 rounded-2xl"
            onClick={handleAcchiClick}
          >
            Acchi Hu
          </button>
        )}
        {/* Always show Tum Se Matlab button unless clicked */}
        {!isTumSeMatlabClicked && (
          <button 
            className="p-3 text-2xl font-bold text-white bg-gray-600 rounded-2xl"
            onClick={handleTumSeMatlabClick}
          >
            Aap Se Matlab?
          </button>
        )}
        {/* Show Accha Ji button if Tum Se Matlab is clicked */}
        {showAcchaJiButton && (
          <button 
            className="p-3 text-2xl font-bold text-white bg-green-600 rounded-2xl"
            onClick={handleAcchaJiClick}
          >
            Accha Ji
          </button>
        )}
      </div>
    </div>
  );
}

export default Hi;
