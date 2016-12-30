import React from 'react';

import ClickButton from '../components/ClickButton';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

const Processor = require('./ProcessorState');

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Processor.ProcessorState;
    this.toggleEffect = this.toggleEffect.bind(this);
  }
  toggleEffect(effect, event) {
    if (this.state.activeFx.name === effect.name) { // Same as that on Display
      effect.active = !effect.active;
    }
    this.setState({
      activeFx: effect
    });
  }
  render() {
    return (
      <div>
        <Display
          bank={this.state.bankName}
          patch={this.state.patchName}
          fx={this.state.activeFx} />
        <EffectSelector
          effects={this.state.effects}
          toggleEffect={this.toggleEffect} />
      </div>
    );
  }
}

export default ProcessorContainer;
