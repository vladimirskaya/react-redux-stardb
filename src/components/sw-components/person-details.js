import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';

import { withSwapiService } from '../hoc-helper';
import ErrorBoundry from '../error-boundry';


const PersonDetails= (props) => {
    
    return (
      <ErrorBoundry>
        <ItemDetails {...props} >
        
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

       </ItemDetails>
      </ErrorBoundry>
    )       
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);