import React from 'react';
require('../../sass/patch-selector.scss');

import ClickButton from './ClickButton';

class PatchSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="patch-selector">
        <div className="title">
          <span className="separator"></span>
          <p>PATCH SELECT</p>
        </div>
        <ClickButton
          title="1"
          icon={false}
          active={false}
          showIndicator={true}
          onClick={this.props.selectPatch.bind(null, 0)} />
        <ClickButton
          title="2"
          icon={false}
          active={false}
          showIndicator={true}
          onClick={this.props.selectPatch.bind(null, 1)} />
        <ClickButton
          title="3"
          icon={false}
          active={false}
          showIndicator={true}
          onClick={this.props.selectPatch.bind(null, 2)} />
      </div>
    );
  }
}

export default PatchSelector;
