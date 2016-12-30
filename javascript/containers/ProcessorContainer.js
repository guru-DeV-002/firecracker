import React from 'react';

import ClickButton from '../components/ClickButton';
import EditSave from '../components/EditSave';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

const Processor = require('./ProcessorState');

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Processor.ProcessorState;
    this.toggleEffect = this.toggleEffect.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.savePatch = this.savePatch.bind(this);
  }
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }
  savePatch() {
    if (this.state.editing) {
      this.toggleEdit();
    }
    // Call API here and update state in DB
    console.log('Saved.');
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
        <EditSave
          editing={this.state.editing}
          toggleEdit={this.toggleEdit}
          onSave={this.savePatch} />
      </div>
    );
  }
}

export default ProcessorContainer;
