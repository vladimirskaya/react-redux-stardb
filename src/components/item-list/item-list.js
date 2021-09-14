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
    //здесь нужно получить данные из АПИ. Для этого нужен СвапиСервис -> строка 11
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
      // console.log('this.state;',this.state);
  }

  renderItems(arr) {
    // console.log('this.props', this.props);
    const { onItemSelected: propsOnItemSelected } = this.props;
    // console.log('propsOnItemSelected', propsOnItemSelected);
    return arr.map( ({name, id }) => {
      // console.log(name,id, typeof this.props);
      return ( 
        <li className = "list-group-item"
        key={id}
        onClick={() => {
          // console.log(`у персонажа № ${id}: ${propsOnItemSelected}`);
          propsOnItemSelected (id)}}> 
          {name} 
        </li>
      )
    });
  }

  render() {
    // console.log('this.state;',this.state);
    //достаем ПиплЛист из стэйта
    const { peopleList } = this.state;
    // и если Пипллиста нету, т.е. он null, то мы отоюражаем спиннер
    if (!peopleList) {
      return <Spinner/>
    }
    // console.log('peopleList:',peopleList);
    const items = this.renderItems(peopleList);
    // console.log('items:' ,items);
    return ( 
      <ul className = "item-list list-group">
        {items}
      </ul>
    );
  }
}