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
    this.decreaseLevel = this.decreaseLevel.bind(this);
    this.increaseLevel = this.increaseLevel.bind(this);

    this.state.outputLevel = this.state.banks[this.state.activeBank].patches[this.state.activePatch].outputLevel;
    this.state.bankName = this.state.banks[this.state.activeBank].code + this.get2DigitString(this.state.activePatch + 1);
    this.state.patchName = this.state.banks[this.state.activeBank].patches[this.state.activePatch].patchName;
    this.state.activeFx = this.state.banks[this.state.activeBank].patches[this.state.activePatch].effects[0];
    this.state.effects = this.state.banks[this.state.activeBank].patches[this.state.activePatch].effects;
  }
  get2DigitString(num) {
    num = num.toString();
    return (num.length == 1 ? ('0' + num) : num);
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
    let activeBank = this.state.activeBank;
    activeBank = (activeBank - 1 < 0 ? activeBank - 1 + this.state.banks.length : activeBank - 1);
    let newBank = String.fromCharCode(activeBank + 65);
    newBank = newBank.concat(this.state.bankName[1] + this.state.bankName[2]);
    let newPatch = this.state.banks[activeBank].patches[this.state.activePatch];
    this.setState({
      activeBank: activeBank,
      bankName: newBank,
      patchName: newPatch.patchName,
      activeFx: newPatch.effects[0],
      effects: this.state.banks[activeBank].patches[this.state.activePatch].effects
    });
  }
  incrementBank() {
    let activeBank = this.state.activeBank;
    activeBank = (activeBank + 1 >= this.state.banks.length ? activeBank + 1 - this.state.banks.length : activeBank + 1);
    let newBank = String.fromCharCode(activeBank + 65);
    newBank = newBank.concat(this.state.bankName[1] + this.state.bankName[2]);
    let newPatch = this.state.banks[activeBank].patches[this.state.activePatch];
    this.setState({
      activeBank: activeBank,
      bankName: newBank,
      patchName: newPatch.patchName,
      activeFx: newPatch.effects[0],
      effects: this.state.banks[activeBank].patches[this.state.activePatch].effects
    });
  }
  selectPatch(pid) {
    let patch = this.get2DigitString(pid + 1);
    let newBank = this.state.bankName[0];
    let newPatch = this.state.banks[this.state.activeBank].patches[pid];
    this.setState({
      bankName: newBank + patch,
      patchName: newPatch.patchName,
      activePatch: pid,
      activeFx: newPatch.effects[0],
      effects: this.state.banks[this.state.activeBank].patches[pid].effects
    });
  }
  handleOutput(newOutput) {
    this.setState({
      outputLevel: newOutput
    });
  }
  decreaseLevel(propID) {
    let newFx = {
      name: this.state.activeFx.name,
      active: this.state.activeFx.active,
      settings: this.state.activeFx.settings
    };
    if (typeof newFx.settings[propID] !== 'undefined') {
      newFx.settings[propID].level = (newFx.settings[propID].level - 1 < 0 ? 0 : newFx.settings[propID].level - 1);
      this.setState({
        activeFx: newFx
      });
    }
  }
  increaseLevel(propID) {
    let newFx = {
      name: this.state.activeFx.name,
      active: this.state.activeFx.active,
      settings: this.state.activeFx.settings
    };
    if (typeof newFx.settings[propID] !== 'undefined') {
      newFx.settings[propID].level = (newFx.settings[propID].level + 1 > newFx.settings[propID].max ? newFx.settings[propID].max : newFx.settings[propID].level + 1);
      this.setState({
        activeFx: newFx
      });
    }
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
              <PropertySelector
                 decreaseLevel={this.decreaseLevel}
                 increaseLevel={this.increaseLevel} />
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
              activeId={this.state.activePatch}
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
