import React from 'react';
require('../../sass/display.scss');

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  renderLoading() {
    return (
      <div className="display">
        <div className="patch">
          <p className="code"></p>
          <p></p>
        </div>
        <div className="settings">
          <p className="loading">Loading...</p>
        </div>
      </div>
    );
  }
  render() {
    const FXSettingNames = this.props.fx.settings.map((setting, i) =>
      <p key={i}>{setting.name}</p>
    );
    const FXSettingProgress = this.props.fx.settings.map((setting, i) =>
      <meter key={i} max={setting.max} min={setting.min} value={setting.level}></meter>
    );
    const FXSettingLevels = this.props.fx.settings.map((setting, i) =>
      <p key={i}>{setting.level}</p>
    );
    if (this.props.loading) {
      return this.renderLoading();
    } else {
      return (
        <div className="display">
          <div className="patch">
            <p className="code">{this.props.bank}</p>
            <p>{this.props.patch}</p>
          </div>
          <div className="settings">
            <p className="name">{this.props.fx.name}</p>
            <p className="status rightAlign">Status: {(this.props.fx.active ? 'ON' : 'OFF')}</p>
            <div className="prop">
              {FXSettingNames}
            </div>
            <div className="bar">
              {FXSettingProgress}
            </div>
            <div className="level">
              {FXSettingLevels}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Display;
