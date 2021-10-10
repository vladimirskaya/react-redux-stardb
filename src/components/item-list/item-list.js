import React from 'react';

import './item-list.css';

const ItemList = ( props ) => {

  const { data, onItemSelected, children: renderLabel } = props;
  // console.log(props);
    const items = data.map((item) => {
      console.log(item);
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
    console.log('items =', items);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }





export default ItemList;