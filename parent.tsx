import * as React from 'react';
import {Child} from './child';

export class Parent extends React.Component<{}, void> {
  render() {
    return (
      <Child></Child>
    );
  }
}
