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

// Parse map string into full length map, with each cell represented by a character.
export function generateAsciiMap(mapData, width, height, includeLineBreaks = true) {
  
  let outputString = '';
  
  function insertLineBreaks(input, width, height) {
    
  };

  // useful regexes
  const findDigitsRegex = /[0-9]+/;
  const findNonDigit = /[^0-9]/;
  const findNonDigitFollowedByDigit = /[^0-9][0-9]/;
  
  // iterate through string, removing what we parse as we go and appending it to outputString
  while (mapData.length > 0) {
    console.log(mapData);
    console.log('outputString: ' + outputString);
    // Two possible cases: either beginning of string is in form digit+symbol,
    // or string starts with one or more standalone symbols.

    // Digit+symbol case:
    if (mapData.search(findDigitsRegex) === 0) {
      // by 'word' I mean digit+symbol combo, like '12A'
      const wordStartIndex = 0;
      const wordEndIndex = mapData.search(findNonDigit);
      const repeatSymbolValue = parseInt(mapData.slice(wordStartIndex, wordEndIndex+1));

      // write symbol to outputString X times
      outputString = outputString.padEnd(outputString.length + repeatSymbolValue, mapData[wordEndIndex]);

      // remove digits and symbol from input string if there's more to process after
      if (mapData.length != wordEndIndex+1) {
        mapData = mapData.substring(wordEndIndex + 1);
      } else { // otherwise just add linebreaks and return, since we're done
        return outputString;
      }
    }

    // 1 or more standalone symbols case:
    else {
      // if no digits are left in input string, write whole thing to outputString, add linebreaks
      // and then return outputString--we're done with the loop at this point
      if (mapData.search(findDigitsRegex) === -1) {
        outputString += mapData;
        return outputString;
      } else { // otherwise, write to outputString and remove symbol sequence
        const wordStartIndex = 0;
        const wordEndIndex = mapData.search(findNonDigitFollowedByDigit);

        outputString += mapData.slice(0, wordEndIndex+1);
        mapData = mapData.substring(wordEndIndex + 1);
      }
    }
  }
}
