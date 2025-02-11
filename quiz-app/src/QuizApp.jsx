import React, { useState } from 'react';
import Navbar from './components/.navbar.jsx';
import MainCard from './components/mainCard.jsx';
import List from './components/list.jsx';
import Settings from './components/settings.jsx';

const QuizApp = () => {
    const [activeCategory, setActiveCategory] = useState('Game');
  
    return (
      <div>
        {/* Navbar bekommt jetzt die Funktion setActiveCategory */}
        <Navbar setActiveCategory={setActiveCategory} />
        
        {/* Dynamische Anzeige der Inhalte */}
        {activeCategory === 'Game' && <MainCard />}
        {activeCategory === 'List' && <List />}
        {activeCategory === 'Settings' && <Settings />}
      </div>
    );
  };
  
  export default QuizApp;