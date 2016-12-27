import React from 'react';

import ClickButton from '../components/ClickButton';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Display />
        <EffectSelector />
        <ClickButton
          title="1"
          active={false}
          toggle="" />
        <ClickButton
          title="2"
          active={false}
          toggle="" />
        <ClickButton
          title="TAP"
          active={true}
          toggle="" />
      </div>
    );
  }
}

export default ProcessorContainer;
