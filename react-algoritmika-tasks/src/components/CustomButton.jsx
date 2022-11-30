import React from 'react';
import './CustomButton.css'

const CustomButton = ({ text, warnMessage, hint }) => {
  return (
    <div className="custom-button">
      <button className={warnMessage ? 'warning' : hint ? 'hint' : ''}>
        {text || 'What is Button?'}
      </button>
    </div>
  );
};

export default CustomButton;
