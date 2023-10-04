/* mapUtils.js - utility functions for generating, deleting, and updating Bloomworld maps
  * Author: Allie Zhao
  * Created: 9/3/2023
 */

import { db } from '../firebase.js';
import { DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from '../config/serverSettings.js';
import { cell_types, cellSymbolList } from '../cellTypeData/cellTypes.js';


// generate a new empty map string with specified width and height
export function generateEmptyMapString(width, height, emptyCellSymbol) {
  return `${width * height}${emptyCellSymbol}`;
}

export function updateMap(mapData, width, height) {
  
  // iterate through map string
  for (let i = 0; i < mapData.length; i++)
  {
    // if (
  }
}

// parse map string into full length map
export function generateAsciiMap(mapData, width, height) {
  let outputString = '';

  while (mapData.length > 0) {
    // Two possible cases: either beginning of string is in form digit+symbol,
    // or string starts with one or more standalone symbols

    // Digit+symbol case:

    // 1 or more standalone symbols case:

    // Either way, after writing expanded digit+symbol or standalone symbols to outputString,
    // remove what you just wrote to outputString from beginning of mapData


    // // useful regexes
    // const findDigitsRegex = /[0-9]+/;
    // const findDigitFollowedByNonDigit = /[0-9][^0-9]/;
    // const findNonDigitFollowedByDigit = /[^0-9][0-9]/;
    //
    // // write any cells at start of string not using digits to outputString
    // if (mapData.search(findDigitsRegex) != 0 && ) {
    //   outputString += mapData.slice(0, mapData.search(findNonDigitFollowedByDigit+1));
    // }
    //
    // while (mapData.search(findDigitsRegex) != -1) {
    //   // read first occurrence of number in mapData into charRepeats
    //   const digitIndexStart = mapData.search(findDigitsRegex);
    //   const digitIndexEnd = mapData.search(findDigitFollowedByNonDigit);
    //   const charRepeats = parseInt(mapData.slice(digitIndexStart, digitIndexEnd+1));
    //
    //   // remove number from mapData string
    //   mapData = mapData.replace(findDigitsRegex, '');
    //};

  }
  // return outputString;
}
