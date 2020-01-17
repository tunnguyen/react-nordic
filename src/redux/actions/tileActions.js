import { GENERATE_TILES, UPDATE_TILE_COLOR } from '../type';
import { defaultColor } from '../../utils/common';

export const generateTiles = (row, column) => dispatch => {
  const data = [];

  for (let i = 0; i < row; i++) {
    data[i] = [];
    for (let j = 0; j < column; j++) {
      data[i][j] = defaultColor;
    }
  }

  return dispatch({
    type: GENERATE_TILES,
    payload: data
  })
}

export const updateTitleColor = data => dispatch => {
  return dispatch({
    type: UPDATE_TILE_COLOR,
    payload: data
  })
}