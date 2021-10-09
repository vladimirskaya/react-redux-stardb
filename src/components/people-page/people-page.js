import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

<<<<<<< HEAD
=======
  
>>>>>>> 389df9355f5f420247c3d75a7cb174098df95d62
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
            <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople} >
              { (i) => (
                `${i.name}  (${i.birthYear})`
              )}
            </ItemList>
    ),
          personDetails = ( 
            <ErrorBoundry>
              <PersonDetails personId={this.state.selectedPerson} /> 
            </ErrorBoundry>
    );

    return (
      
        <Row left={itemList} right={personDetails} />
      
      
    );
  }
}
