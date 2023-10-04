/* cellTypes.js - definitions for cell types, their properties, and how they spread
  * Author: Allie Zhao
  */

  export const cell_types = [
    {
      name: 'empty',
      symbol: '-',
      placeable: false
    },

    {
      name: 'barrier',
      symbol: '#',
      placeable: false
    },

    {
      name: 'Solarose',
      symbol: 'A',
      spread_radius: 1,
      cost: 5,
      reward: 3,
      placeable: true
    }
  ]

  // generate array of cell symbols for reading map strings
  export const cellSymbolList = cell_types.map((cellType) => cellType.symbol);
