import React from 'react';
require('../../sass/edit-save.scss');

class EditSave extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="edit-save">
        <div>
          <p>EDIT</p>
          <button
            className={(this.props.editing ? 'active' : '')}
            onClick={this.props.toggleEdit}>
            <div className="light"></div>
          </button>
        </div>
        <div>
          <p>SAVE</p>
          <button
            onClick={this.props.onSave}>
            <div className="light"></div>
          </button>
        </div>
      </div>
    );
  }
}

export default EditSave;
