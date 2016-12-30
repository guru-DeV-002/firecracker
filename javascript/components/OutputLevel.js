import React from 'react';
import Knob from 'react-canvas-knob';
require('../../sass/output-level.scss');

class OutputLevel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="output-level">
        <p>OUTPUT</p>
        <Knob
          value={this.props.outputLevel}
          onChange={this.props.handleOutput}
          height={65}
          fgColor="#FC772B"
          font="Passion One"
          disableTextInput={true}
          angleArc={270}
          angleOffset={-135} />
      </div>
    );
  }
}

export default OutputLevel;
