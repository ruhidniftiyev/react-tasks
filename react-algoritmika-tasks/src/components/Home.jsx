import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const navItems = [
    { path: 'about', text: 'Haqqında' },
    { path: 'examples', text: 'İş nümünələri' },
    { path: 'contacts', text: 'Əlaqə məlumatları' },
  ];
  return (
    <div>
      {navItems.map((el) => (
        <Link to={el.path}>
          <button>{el.text}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;