import React from 'react';
import Display from '../components/Display'

class Processor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

export default Processor;
