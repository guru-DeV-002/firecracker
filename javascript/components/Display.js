import React from 'react';
let processor = require('./ProcessorFunctions');
require('../../sass/display.scss');

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 92
    };
  }
  render() {
    const processorEffects = processor.effects.map((effect, index) =>
      <div className="effect" key={effect.name}>
        <p>{effect.name}</p>
        <button className={(effect.name[0] === 'D' ? 'active' : '')}></button>
      </div>
    );
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
            <progress max="100" value={this.state.val}></progress>
            <progress max="100" value="65"></progress>
            <progress max="100" value="74"></progress>
            <progress max="100" value="81"></progress>
          </div>
          <div className="level">
            <p>{this.state.val}</p>
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
