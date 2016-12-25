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
        <button></button>
      </div>
    );
    return (
      <div className="display">
        <div className="patch">
          <p className="code">U02</p>
          <p>MILD SOLO</p>
        </div>
        <div className="settings">
          <div>
            <p>High</p>
            <progress max="100" value={this.state.val}></progress>
            <span>{this.state.val}</span>
          </div>
          <div>
            <p>H Mids</p>
            <progress max="100" value="65"></progress>
            <span>65</span>
          </div>
          <div>
            <p>L Mids</p>
            <progress max="100" value="65"></progress>
            <span>65</span>
          </div>
          <div>
            <p>Low</p>
            <progress max="100" value="74"></progress>
            <span>74</span>
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
