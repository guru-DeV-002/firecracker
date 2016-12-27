import React from 'react';
let processor = require('./ProcessorFunctions');
require('../../sass/effect-selector.scss');

class EffectSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = processor;
  }
  handleClick(index, e) {
    let newEffects = this.state.effects;
    newEffects[index].active = !newEffects[index].active;
    this.setState({
      effects: newEffects
    });
  }
  render() {
    const processorEffects = this.state.effects.map((effect, index) => {
      let click = this.handleClick.bind(this, index);
      return (
        <div className="effect" key={effect.name}>
          <p>{effect.name}</p>
          <button
            className={(effect.active ? 'active' : '')}
            onClick={click}>
            <div className="light"></div>
          </button>
        </div>
      );
    });
    return (
      <div className="effect-selector">
        <div className="title">
          <span className="separator"></span>
          <p>EFFECTS</p>
        </div>
        {processorEffects}
      </div>
    );
  }
}

export default EffectSelector;
