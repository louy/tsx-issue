import * as React from 'react';
import Child from './child';

class Parent extends React.Component<void, void> {
  render() {
    return (
      <Child></Child>
    );
  }
}

export default Parent;
