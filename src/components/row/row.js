import React from 'react';
import ErrorIndicator from '../error-indicator';

import './row.css';

const Row = ({ left, right }) => {
  
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}  
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

export default Row;
