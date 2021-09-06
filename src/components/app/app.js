import React, { Component } from 'react';


import './app.css'; 
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <main>
          <h1>Hello</h1>
          <RandomPlanet/>
          <ItemList/>
          <PersonDetails/>
          <PlanetDetails/>
          <StarshipDetails/>
        </main>
      </div>
    );
  }
}