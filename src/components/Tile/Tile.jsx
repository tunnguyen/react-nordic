import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTitleColor } from '../../redux/actions/tileActions';
import { randomColor, defaultColor } from '../../utils/common';
import './Tile.scss';

class Tile extends Component {
  updateColor = () => {
    const { rowIdx, columnIdx, currentColor, updateTitleColor } = this.props;
    let newColor = '';

    if (currentColor !== defaultColor) {
      newColor = defaultColor;
    } else {
      newColor = randomColor();
    }

    updateTitleColor({ rowIdx, columnIdx, newColor });
  }

  render() {
    const { color } = this.props;

    return (
      <div 
        className="tile" 
        onClick={ this.updateColor }
        style={{ backgroundColor: color }}
      />
    )
  }
}

export default connect(null, { updateTitleColor })(Tile);