import React from 'react';

import './item-list.css';

const ItemList = ( props ) => {
  console.log("ItemList props^ ", props);
  const { data, onClick: onItemSelected, children: renderLabel } = props;
 
    const items = data.map((item) => {
      const { id } = item;
      
      const label = renderLabel(item);
      console.log("onItemSelected в ItemList", onItemSelected );
      return (
        <li className="list-group-item"
            key={id}
            onClick={ () => onItemSelected(id)} >
          {label}
        </li>
      );
    });
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }





export default ItemList;