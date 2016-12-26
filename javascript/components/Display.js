import React from 'react';
let processor = require('./ProcessorFunctions');
require('../../sass/display.scss');

class Display extends React.Component {
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
          </button>
        </div>
      );
    });
    return (
      <div className="display">
        <div className="patch">
          <p className="code">U02</p>
          <p>MILD SOLO</p>
        </div>
        <div className="settings">
          <div className="prop">
            <p>High</p>
            <p>High Mids</p>
            <p>Low Mids</p>
            <p>Low</p>
          </div>
          <div className="bar">
            <progress max="100" value="92"></progress>
            <progress max="100" value="65"></progress>
            <progress max="100" value="74"></progress>
            <progress max="100" value="81"></progress>
          </div>
          <div className="level">
            <p>92</p>
            <p>65</p>
            <p>74</p>
            <p>81</p>
          </div>
        </div>
        <div className="effect-selector">
          <div className="title">
            <span className="separator"></span>
            <p>EFFECTS</p>
          </div>
          {processorEffects}
        </div>
      </div>
    );
  }
}

export default Display;
