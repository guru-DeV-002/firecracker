import React from 'react';
require('../../sass/effect-selector.scss');

class EffectSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const processorEffects = this.props.effects().map((effect, i) => {
      return (
        <div className="effect" key={i}>
          <p>{effect.name}</p>
          <button
            data-id={i}
            className={(effect.active ? 'active' : '')}
            onClick={this.props.toggleEffect}>
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
