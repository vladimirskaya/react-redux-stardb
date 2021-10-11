import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';

import ErrorBoundry from '../error-boundry';
import { withSwapiService } from '../hoc-helper';


const StarshipDetails = (props) => {
  return (
    <ErrorBoundry>
      <ItemDetails {...props}>
    
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
    </ErrorBoundry>  
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);