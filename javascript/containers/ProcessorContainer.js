import React from 'react';

import ClickButton from '../components/ClickButton';
import EffectSelector from '../components/EffectSelector';
import Display from '../components/Display';

const ProcessorState = require('./ProcessorState');

class ProcessorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProcessorState;
    this.getBankName = this.getBankName.bind(this);
    this.getPatchName = this.getPatchName.bind(this);
    this.getActiveFx = this.getActiveFx.bind(this);
  }
  getBankName() {
    let bankNum = this.state.activeBankPatch.bank;
    let patchNum = this.state.activeBankPatch.patch;
    return this.state.banks[bankNum].code + '0' + (patchNum + 1);
  }
  getPatchName() {
    let bankNum = this.state.activeBankPatch.bank;
    let patchNum = this.state.activeBankPatch.patch;
    return this.state.banks[bankNum].patches[patchNum].patchName;
  }
  getActiveFx() {
    let bankNum = this.state.activeBankPatch.bank;
    let patchNum = this.state.activeBankPatch.patch;
    return this.state.banks[bankNum].patches[patchNum].effects[0];
  }
  render() {
    return (
      <div>
        <Display
          bank={this.getBankName}
          patch={this.getPatchName}
          fx={this.getActiveFx} />
      </div>
    );
  }
}

export default ProcessorContainer;
