import React from 'react';
require('../../sass/button.scss');

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clickButton">
        <p>{this.props.title}</p>
        <div className={'indicator ' + (this.props.active ? 'active ' : '')}>
          <div className="light"></div>
        </div>
        <button onClick={this.props.toggle}></button>
      </div>
    );
  }
}

export default ClickButton;
