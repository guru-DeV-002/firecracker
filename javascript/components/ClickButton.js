import React from 'react';
require('../../sass/button.scss');

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      tap: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      // active: !this.state.active,
      tap: !this.state.tap
    });
  }
  render() {
    return (
      <div className="clickButton">
        <p>{this.props.title}</p>
        <div className={'indicator ' +
          (this.state.active ? 'active ' : '') +
          (this.state.tap ? 'tap-delay' : '')}>
          <div className="light"></div>
        </div>
        <button onClick={this.toggle}></button>
      </div>
    );
  }
}

export default ClickButton;
