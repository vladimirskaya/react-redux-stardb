import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';

<<<<<<< HEAD
import { withSwapiService } from '../hoc-helper';


const PlanetDetails= (props) => {
      return (
        <ItemDetails {...props} >              
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>)
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
=======
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helper';


const PlanetDetails= ({ itemId }) => {

    return (
      <SwapiServiceConsumer>
          {
            ({ getPlanet, getPlanetImage }) => {
              return (
                <ItemDetails
                    itemId={itemId}
                    getData={getPlanet}
                    getImageUrl={getPlanetImage} >
                    
                    <Record field="population" label="Population" />
                    <Record field="rotationPeriod" label="Rotation Period" />
                    <Record field="diameter" label="Diameter" />
    
                </ItemDetails>)
            }
          }
        </SwapiServiceConsumer>
      
    ) 

};


export default withSwapiService(PlanetDetails);
>>>>>>> dfc8a9eb51e30393bc12f866f5e41d20e33a15cb
