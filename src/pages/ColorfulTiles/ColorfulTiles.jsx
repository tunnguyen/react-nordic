import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenerateForm from './GenerateForm';
import Tile from '../../components/Tile';
import './ColorfulTiles.scss';

class ColorfulTiles extends Component {
  render() {
    const { tiles } = this.props;
    const myStr = 'Colorful Tiles';

    return (
      <div className="colorful-tiles">
        <h2>{ myStr }</h2>
        <GenerateForm />
        {!!tiles && <div ref={ tR => { this.tilesRef = tR } }>
          {tiles.map((row, rowIdx) => 
            <div key={ rowIdx } className="tile-row">
              {row.map((tile, columnIdx) =>
                <Tile 
                  key={ columnIdx }
                  rowIdx={ rowIdx }
                  columnIdx={ columnIdx }
                  currentColor={ tiles[rowIdx][columnIdx] }
                  color={ tile } 
                />  
              )}
            </div>  
          )}
        </div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tiles: state.tile.data
})

export default connect(mapStateToProps)(ColorfulTiles);