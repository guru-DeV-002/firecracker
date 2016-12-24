import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      end: '!'
    };
  }
  render() {
    return (
      <h1>Hello {this.props.name}{this.state.end}</h1>
    );
  }
}

export default Hello;
