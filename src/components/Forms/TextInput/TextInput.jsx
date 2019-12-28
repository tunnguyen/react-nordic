import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { label, name, onChange } = this.props;

    return(
      <div className="form-field">
        <label>{ label }</label>
        <input type="text" name={ name } onChange={ onChange } />
      </div>
    )
  }
}

export default TextInput;