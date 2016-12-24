import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!'
    };
  }
  render() {
    return (
      <h1>{this.state.text}</h1>
    );
  }
}

export default Hello;
