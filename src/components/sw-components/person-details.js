import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';

import { withSwapiService } from '../hoc-helper';
import ErrorBoundry from '../error-boundry';


<<<<<<< HEAD
const PersonDetails= (props) => {
    
    return (
      <ErrorBoundry>
        <ItemDetails {...props} >
=======
const PersonDetails= ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
      <ErrorBoundry>
        <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}>
>>>>>>> dfc8a9eb51e30393bc12f866f5e41d20e33a15cb
        
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

       </ItemDetails>
      </ErrorBoundry>
    )       
};

<<<<<<< HEAD
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
=======
export default withSwapiService(PersonDetails);
>>>>>>> dfc8a9eb51e30393bc12f866f5e41d20e33a15cb
