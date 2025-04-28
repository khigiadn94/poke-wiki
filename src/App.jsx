import { useState } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import PokeCard from './components/PokeCard';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(24);
  const [showSideMenu, setShowSideMenu] = useState(false); // this does the opposite of what it should do (ie, when showSideMenu it true, it's actually false)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  function handleCloseMenu() {
    setShowSideMenu(false);
  }
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav
        showSideMenu={showSideMenu}
        handleCloseMenu={handleCloseMenu}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
