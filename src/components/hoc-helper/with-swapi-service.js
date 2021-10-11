import React from 'react';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceConsumer} from '../swapi-service-context';

<<<<<<< HEAD
const withSwapiService = (Wrapped, mapMethodsToProps) => {
=======
const withSwapiService = (Wrapped) => {
>>>>>>> dfc8a9eb51e30393bc12f866f5e41d20e33a15cb

    return (props) => {
        return ( 
            <SwapiServiceConsumer> 
                {
                    (swapiService) => {
<<<<<<< HEAD
                        const serviceProps = mapMethodsToProps(swapiService);
                        return ( 
                            < Wrapped { ...props} {...serviceProps}/>
=======
                        return ( 
                            < Wrapped { ...props} swapiService = { swapiService }/>
>>>>>>> dfc8a9eb51e30393bc12f866f5e41d20e33a15cb
                        )
                    }
                } 
            </SwapiServiceConsumer> 
        
        )
    }
}

export default withSwapiService;