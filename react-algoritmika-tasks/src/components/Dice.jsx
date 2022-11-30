import React, { useEffect, useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState('');

  useEffect(() => {
    window.addEventListener('click', () => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    });
  }, []);

  return (
    <div className="dice">
      <div className="dice-element">{diceValue}</div>
    </div>
  );
};

export default Dice;
