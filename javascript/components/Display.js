import React from 'react';
require('../../sass/display.scss');

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      </div>
    );
  }
}

export default Display;
