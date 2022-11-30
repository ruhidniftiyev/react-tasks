import React from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton warnMessage={true} />
      <CustomButton hint={true} />
      <CustomButton text={'Click me!'} />
    </div>
  );
}

export default App;
