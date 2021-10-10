import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PlanetList,
  PersonList,
  StarshipList
} from "../sw-components"



import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

        <PersonDetails itemId={11}/>
        <PlanetDetails itemId={5}/>
        <StarshipDetails itemId={9}/>


          <PersonList />

          <PlanetList />

          <StarshipList/> 


        </div>
      </ErrorBoundry>
    );
  }
}
