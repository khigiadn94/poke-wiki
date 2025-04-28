import React, { useState } from 'react';
import { first151Pokemon, getFullPokedexNumber, getPokedexNumber } from '../utils';

export default function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props;
  const [searchVal, setSearchVal] = useState('');

  const filterdPokemon = first151Pokemon.filter((ele, eleIndex) => {
    // if full pokemon number includes the current search value, return true
    if (getFullPokedexNumber(eleIndex).includes(searchVal)) return true;
    // if the pokemon name includes the current search value, return true
    if (ele.toLowerCase().includes(searchVal.toLowerCase())) return true;
    // otherwise, exclude value from the array
    return false;
  });
  return (
    <nav className={' ' + (showSideMenu ? ' open' : '')}>
      <div className={'header ' + (showSideMenu ? ' open' : '')}>
        <button onClick={handleCloseMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Poké-Wiki</h1>
      </div>
      <input
        placeholder="E.g. 001 or Bulba..."
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
      {filterdPokemon.map((pokemon, pokemonIndex) => {
        const truePokemonNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            key={pokemonIndex}
            onClick={() => {
              setSelectedPokemon(truePokemonNumber);
              handleCloseMenu();
            }}
            className={
              'nav-card ' + (pokemonIndex === selectedPokemon ? ' nav-card-selected' : ' ')
            }
          >
            <p>{getFullPokedexNumber(truePokemonNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
