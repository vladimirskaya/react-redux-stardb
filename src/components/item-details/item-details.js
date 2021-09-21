import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

import './item-details.css';


export default class ItemDetails extends Component {
  
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  }

  componentDidMount(){
    console.log(this.state);
    this.updatePerson();
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    
    const { itemId, getData, getImageUrl } = this.props;
    console.log( 'update',this.props );
    if (!itemId) {
      return;
    }
    getData(itemId)
    .then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(itemId)
      });
      console.log(this.state);
    });
  }

  render() {
    const { item, loading, image } = this.state;

    if (!item) {
      return <span> Select a person from a list </span>
    }
    
    const spinner = loading ? <Spinner /> : null; 
    // const content = item ? <PersonView item={item} img={image}/> : null;   
    const { id, name, gender, birthYear, eyeColor } = item;
    return(
      <div className="person-details card">
        {spinner}
        {/* {content} */}

        <React.Fragment>
      <div>
        <img className="person-image"
          src={image}
          alt={`${item.name}`}/>
      </div>

      <div className="card-body">
        <h4>{name} </h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) =>{
              return (
                React.cloneElement(child, { item })
                );
            })
          }
        </ul>
        <ErrorButton/>
      </div>
      </React.Fragment>


      </div>
    ); 
  }
}

const Record = ({item, field, label}) => {
  return(
    <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
    </li>
  )
}
export {
  Record
}


const PersonView = ({item, img}) =>{
  console.log(img);
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <React.Fragment>
      <div>
        <img className="person-image"
          src={img}
          alt="${item.name}"/>
      </div>

      <div className="card-body">
        <h4>{name} </h4>
        <ul className="list-group list-group-flush">
          {this.props.children}
        </ul>
        <ErrorButton/>
      </div>
      </React.Fragment>
  )
}