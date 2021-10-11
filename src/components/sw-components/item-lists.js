import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model}) => <span>{name} ({model})</span>

const PersonList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllPeople);
// console.log(PersonList);

const PlanetList = withData(
                    withChildFunction(ItemList, renderName),
                    getAllPlanets);

const StarshipList = withData(
                    withChildFunction(ItemList, renderNameAndModel), 
                    getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};