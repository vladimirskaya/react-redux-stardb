import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

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
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        });
      }

    componentDidCatch(error, info){
        debugger;
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
          }

        const itemList = (
                    <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name, gender, birthYear}) => (
                        `${name} (${gender}, ${birthYear}) `
                      ) } />
        ),
              personDetails = (
                    <PersonDetails personId={this.state.selectedPerson}/>
              );
        
              return(
                <Row left={itemList} right={personDetails}/>
              );
    }
}