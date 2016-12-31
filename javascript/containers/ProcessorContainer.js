import React from 'react';

import Display from '../components/Display';
import OutputLevel from '../components/OutputLevel';
import EditSave from '../components/EditSave';
import EffectSelector from '../components/EffectSelector';
import PropertySelector from '../components/PropertySelector';
import ClickButton from '../components/ClickButton';
import BankSelector from '../components/BankSelector';
import PatchSelector from '../components/PatchSelector';

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
    this.selectPatch = this.selectPatch.bind(this);
    this.handleOutput = this.handleOutput.bind(this);
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
  selectPatch(patch) {
    console.log(patch);
  }
  handleOutput(newOutput) {
    this.setState({
      outputLevel: newOutput
    });
  }
  render() {
    return (
      <div className="processor-container">
        <div className="pins">
            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            <div style={{marginLeft: '16%'}}><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
        </div>
        <div className="processor">
          <div className="upper">
            <div className="row0">
              <p>DC IN</p>
              <p>MIDI In</p>
              <p>MIDI Out</p>
              <p style={{marginLeft: '16%'}}>Phones</p>
              <p>L/Mono Out</p>
              <p>R Out</p>
              <p>Input</p>
            </div>
            <div className="row1">
              <div className="edit-save-container">
                <OutputLevel
                  outputLevel={this.state.outputLevel}
                  handleOutput={this.handleOutput} />
                <EditSave
                  editing={this.state.editing}
                  toggleEdit={this.toggleEdit}
                  onSave={this.savePatch} />
              </div>
              <Display
                bank={this.state.bankName}
                patch={this.state.patchName}
                fx={this.state.activeFx} />
              <PropertySelector />
            </div>
            <div className="row2">
              <EffectSelector
                effects={this.state.effects}
                toggleEffect={this.toggleEffect} />
            </div>
          </div>
          <div className="row3">
            <BankSelector
              decrement={this.decrementBank}
              increment={this.incrementBank} />
            <PatchSelector
              selectPatch={this.selectPatch} />
          </div>
          <div className="pedal">
            <span className="separator"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessorContainer;
