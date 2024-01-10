import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Animated Pop-Up</h2>
        <p>This is the pop-up content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
