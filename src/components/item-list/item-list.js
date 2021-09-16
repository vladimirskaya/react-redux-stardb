import React, {
  Component
} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props; // getData возвращает промис 
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
      // console.log('this.state;',this.state);
  }

  renderItems(arr) {
    // onItemSelected - как называется в родителе, propsOnItemSelected - как обозвать здесь
    const { onItemSelected: propsOnItemSelected } = this.props;
    return arr.map( (item) => {
      const { id } = item;
      const label = this.props.renderItem(item)

      return ( 
        <li className = "list-group-item"
            key={id}
            onClick={() => {propsOnItemSelected (id)}}> 
          {label} 
        </li>
      )
    });
  }

  render() {
    //достаем ПиплЛист из стэйта
    const { itemList } = this.state;
    // и если Пипллиста нету, т.е. он null, то мы отоюражаем спиннер
    if (!itemList) {
      return <Spinner/>
    }
    // console.log('peopleList:',peopleList);
    const items = this.renderItems(itemList);
    // console.log('items:' ,items);
    return ( 
      <ul className = "item-list list-group">
        {items}
      </ul>
    );
  }
}