import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';


const Row = ({ left, right }) => {
  return(
    <div className="row mb2">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
  )
}



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

    const personDetails = (
      <ItemDetails itemId={11}
      getData={this.swapi.getPerson}
      getImageUrl={this.swapi.getPersonImage} >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color "/>
      </ItemDetails> 
    )

    const starshipDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={12}
            getData={this.swapi.getStarship}
            getImageUrl={this.swapi.getStarshipImage} >
              <Record field="model" label="Model"/>
              <Record field="length" label="Length"/>
              <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <div className="star-db-app">
          <Header />

          <Row 
            left={personDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>
    )}
      
        /* {planet}
        <button 
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
              Toogle Random Planet
        </button> */

        /* <ErrorButton/> 
        <button
          onClick={() =>{
            const str = '100! 7!!!66',
                  n = 100;

            const remove = ( str, n ) => {
              console.log(str, n);
              let amount = 0,
                  i = 0,
                  condition = true;
              let newStr = '';

              while (condition) {
                i = str.lastIndexOf('!');
                if (i === -1 || amount === n) break;
                newStr = str.substring(0,i) + str.substring(i+1);
                str = newStr;
                amount++;
                console.log('amount ===', amount,' newStr ===', newStr);
              }       
              
              return newStr;
            }
            console.log(remove(str,n)); 
          }}>
            srt
          </button> */
        /* <PeoplePage/>  */

        /* <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapi.getAllPlanets} // эта функция испол-ся для того, чтоб передавать данные
             >
               {(item) => `${item.name}, ${item.diameter} km` } 
                  
            </ItemList>        
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapi.getAllStartships}>
                {(item) => (`${item.name}, model: ${item.model}`) }
            </ItemList>
                      
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div> */
      // </div>
  //   );
  // }
  
};
