import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData ) => {
  console.log("зашли в хос");
    return class extends Component {
  
      state = {
        data: null
      };
    
      componentDidMount() {
        getData()
          .then((data) => {
            this.setState({
              data
            });
          });
      }
     
      render() {
        console.log((this.state));
        const { data } = this.state;
  
        if (!data) {
        return <Spinner />;
        }
  
        return <View {...this.props} data={data} />
      }
    }
  }

  export default withData;