import React from 'react';

import ClickButton from '../components/ClickButton';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

class Processor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Display />
        <EffectSelector />
        <ClickButton title="TAP" />
      </div>
    );
  }
}

export default Processor;
