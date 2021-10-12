import React, { Component } from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    }
    
    onItemSelected = (selectedItem) => {
        this.setState( {selectedItem} );
    }
    
    render() {
        
        const { selectedItem } = this.state;
        console.log("onItenSelescted=", this.onItemSelected);
        return (
            <Row 
                left={<PersonList onClick={this.onItemSelected}/>}
                right={<PersonDetails itemId={selectedItem} />}
            />
        );
    };
}