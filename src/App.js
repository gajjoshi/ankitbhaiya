import React, { useState, useEffect } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import Confetti from 'react-dom-confetti';
import './App.css';
import casino from './casino.mp4'
// import Popup from './Popup';

export default function App() {
  const segments = [
    " bonus 1",
    " bonus 2",
    " bonus 3",
    " bonus 4",
    " bonus 5",
    " bonus 6",
    " bonus 7",
    " bonus 8",
    " bonus 9",
    " bonus 10",
    " bonus 11"
  ];

  const segColors = [
    "#001f3f",
    "#ffdc00",
    "#2ecc40",
    "#ff6f61",
    "#9b59b6",
    "#2ecc40",
    "#e74c3c",
    "#00b5cc",
    "#ff851b",
    "#0074d9"
  ];

  const [confetti, setConfetti] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showWinningPopup, setShowWinningPopup] = useState(false);
  const [wheelSize, setWheelSize] = useState(calculateWheelSize());

  useEffect(() => {
    const handleResize = () => {
      setWheelSize(calculateWheelSize());
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onFinished = (winner) => {
    console.log(winner);
    setConfetti(true);
    setPopupOpen(true);

    // Check if the user won a prize and show the winning pop-up
    if (winner !== "better luck next time") {
      setShowWinningPopup(true);
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const closeWinningPopup = () => {
    setShowWinningPopup(false);
  };

  function calculateWheelSize() {
    return window.innerWidth > 600 ? 295 : 150; // Adjust the size based on your desired logic
  }

  return (
    <div className="app-container">
            <video autoPlay muted loop className="video-background">
        <source src={casino} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-image"></div>
      <div className="App">
        <div className="wheel-container">
          <div className="wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={onFinished}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={wheelSize}
              upDuration={500}
              downDuration={600}
              fontFamily="Arial"
            />
          </div>
          <div className="confetti">
            <Confetti active={confetti} config={{ angle: 90, spread: 360, startVelocity: 120, elementCount: 4000, position: 'fixed', origin: { x: 0.1, y: 0.5 } }} />
          </div>
        </div>
      </div>

    </div>
  );
}
