import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';

import { withSwapiService } from '../hoc-helper';
import ErrorBoundry from '../error-boundry';


const PersonDetails= ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
      <ErrorBoundry>
        <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

       </ItemDetails>
      </ErrorBoundry>
    )       
};

export default withSwapiService(PersonDetails);