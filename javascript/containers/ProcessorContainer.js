import React from 'react';

import Display from '../components/Display';
import EditSave from '../components/EditSave';
import EffectSelector from '../components/EffectSelector';
import PropertySelector from '../components/PropertySelector';
import ClickButton from '../components/ClickButton';
import BankSelector from '../components/BankSelector';

require('../../sass/main.scss');
const Processor = require('./ProcessorState');

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Processor.ProcessorState;
    this.toggleEffect = this.toggleEffect.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.savePatch = this.savePatch.bind(this);
    this.decrementBank = this.decrementBank.bind(this);
    this.incrementBank = this.incrementBank.bind(this);
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
  decrementBank() {
    console.log('Decrement');
  }
  incrementBank() {
    console.log('Increment');
  }
  render() {
    return (
      <div className="processor">
        <EditSave
          editing={this.state.editing}
          toggleEdit={this.toggleEdit}
          onSave={this.savePatch} />
        <Display
          bank={this.state.bankName}
          patch={this.state.patchName}
          fx={this.state.activeFx} />
        <PropertySelector />
        <EffectSelector
          effects={this.state.effects}
          toggleEffect={this.toggleEffect} />
        <BankSelector
          decrement={this.decrementBank}
          increment={this.incrementBank} />
      </div>
    );
  }
}

export default ProcessorContainer;
