import React from 'react';
require('../../sass/button.scss');

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clickButton">
        <p><i className={this.props.icon === false ? 'hide' : this.props.icon}></i>{this.props.title}</p>
        <div
          className={'indicator ' +
            (this.props.active ? 'active ' : '') +
            (this.props.showIndicator === false ? 'hide ' : '')}>
          <div className="light"></div>
        </div>
        <button onClick={this.props.onClick}></button>
      </div>
    );
  }
}

export default ClickButton;
