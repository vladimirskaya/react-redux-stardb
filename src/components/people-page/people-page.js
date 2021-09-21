import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './people-page.css';




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
export default class PeoplePage extends Component {

  swapiService = new SwapiService();

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        });
      }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
          }

        const itemList = (
                    <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
                        {(i) => (
                          `${i.name} (${i.birthYear}) `
                        )}
                    </ItemList> 
        );
        const personDetails = (
          <ErrorBoundry>
            <ItemDetails personId={this.state.selectedPerson}/>
          </ErrorBoundry>          
        );
        
        return(
          <Row left={itemList} right={personDetails}/>
        );
    }
}