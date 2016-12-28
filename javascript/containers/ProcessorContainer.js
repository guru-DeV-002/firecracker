import React from 'react';

import ClickButton from '../components/ClickButton';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

const Processor = require('./ProcessorState');

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Processor.ProcessorState;
    this.getBankName = this.getBankName.bind(this);
    this.getPatchName = this.getPatchName.bind(this);
    this.getActiveFx = this.getActiveFx.bind(this);
    this.getPatchEffects = this.getPatchEffects.bind(this);
    this.toggleEffect = this.toggleEffect.bind(this);
  }
  getBankName() {
    let bankNum = this.state.activeBank;
    let patchNum = this.state.activePatch;
    return this.state.banks[bankNum].code + '0' + (patchNum + 1);
  }
  getPatchName() {
    let bankNum = this.state.activeBank;
    let patchNum = this.state.activePatch;
    return this.state.banks[bankNum].patches[patchNum].patchName;
  }
  getActiveFx() {
    let bankNum = this.state.activeBank;
    let patchNum = this.state.activePatch;
    return this.state.banks[bankNum].patches[patchNum].effects[this.state.activeFx];
  }
  getPatchEffects() {
    let bankNum = this.state.activeBank;
    let patchNum = this.state.activePatch;
    return this.state.banks[bankNum].patches[patchNum].effects;
  }
  toggleEffect(e) {
    let bankNum = this.state.activeBank;
    let patchNum = this.state.activePatch;
    console.log(e.target.dataset.id);
    //!this.state.banks[bankNum].patches[patchNum].effects[e.target.dataset.id].active;
  }
  render() {
    return (
      <div>
        <Display
          bank={this.getBankName}
          patch={this.getPatchName}
          fx={this.getActiveFx} />
        <EffectSelector
          effects={this.getPatchEffects}
          toggleEffect={this.toggleEffect} />
      </div>
    );
  }
}

export default ProcessorContainer;
