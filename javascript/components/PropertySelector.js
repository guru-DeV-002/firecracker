import React from 'react';
require('../../sass/property-selector.scss');

class PropertySelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const buttons = (
      <div className="buttons">
        <div>
          <p>1</p>
          <button className="left">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="right">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div>
          <p>2</p>
          <button className="left">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="right">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div>
          <p>3</p>
          <button className="left">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="right">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div>
          <p>4</p>
          <button className="left">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="right">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
    return (
      <div className="parameters">
        <div className="title">
          <span className="separator"></span>
          <p>PARAMETER</p>
        </div>
        {buttons}
      </div>
    );
  }
}

export default PropertySelector;
