/* cellTypes.js - definitions for cell types, their properties, and how they spread
  * Author: Allie Zhao
  */

  export const cell_types = {
    0: {
      name: 'empty',
      symbol: '-',
      placeable: false
    },

    1: {
      name: 'barrier',
      symbol: '#',
      placeable: false
    },

    2: {
      name: 'Solarose',
      symbol: 'A',
      spread_radius: 1,
      cost: 5,
      reward: 3,
      placeable: true
    }
  }
