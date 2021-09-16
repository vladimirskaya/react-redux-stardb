import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false   // была ли ошибка или нет в методах жизн.цикла
  }

  toggleRandomPlanet = () => {
    const prevState = this.state.showRandomPlanet;
    this.setState({
      showRandomPlanet: !prevState
    });
  }

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({ hasError: true }); // если обнаружена ошибка, то: 
                                        // 1 - устанавливаем Стейт в тру
                                        // 2 - в рендере прописываем условия по ошибкам -> 42
  }

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    return (
      <div className="star-db-app">
        <Header />
        {planet}
        <button 
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
              Toogle Random Planet
        </button>

        <ErrorButton/> 

        <PeoplePage/> 

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapi.getAllPlanets} // эта функция испол-ся для того, чтоб передавать данные
                      renderItem={(item) => `${item.name}, ${item.diameter} km` } />
                  {/* эта функция будет заниматься отрисовкой списка */}
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapi.getAllStartships}
                      renderItem={(item) => `${item.name}, model: ${item.model}` } />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
  
};
