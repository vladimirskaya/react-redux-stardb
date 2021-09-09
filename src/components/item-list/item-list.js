import React, {
  Component
} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list';

export default class ItemList extends Component {

  swapiService = new SwapiService();
  state = {
    peopleList: null
  }

  componentDidMount() {
    //здесь нужно получить данные из АПИ. Для этого нужен СвапиСервис -> строка 9
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(arr) {
    return arr.map( ({name, id }) => {
      return ( 
        <li className = "list-group-item"
        key = {id}
        onClick = { () => this.propsOnItemSelected(id)} > 
          {name} 
        </li>
      )
    });
  }

  render() {

    //достаем ПиплЛист из стэйта
    const { peopleList } = this.state;
    // и если Пипллиста нету, т.е. он null, то мы отоюражаем спиннер
    if (!peopleList) {
      return <Spinner/>
    }

    const items = this.renderItems(peopleList);

    return ( 
      <ul className = "item-list list-group">
        {items}
      </ul>
    );
  }
}