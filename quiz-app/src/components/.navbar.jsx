import React from 'react';

const Navbar = ({ setActiveCategory }) => {
  const handleClick = (e, category) => {
    e.preventDefault(); // Verhindert das Standardverhalten des Links
    setActiveCategory(category); // Aktualisiert den Zustand
  };

  return (
    <nav className="navbar">
      <a href="#List" onClick={(e) => handleClick(e, 'List')}>List</a>
      <a href="#Game" onClick={(e) => handleClick(e, 'Game')}>Game</a>
      <a href="#Settings" onClick={(e) => handleClick(e, 'Settings')}>Settings</a>
    </nav>
  );
};

export default Navbar;