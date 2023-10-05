/* mapUtils.js - utility functions for generating, deleting, and updating Bloomworld maps
  * Author: Allie Zhao
  * Created: 9/3/2023
 */

import { db } from '../firebase.js';
import { DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from '../config/serverSettings.js';
import { cell_types, cellSymbolList, reproducingCellSymbolList } from '../cellTypeData/cellTypes.js';


// generate a new empty map string with specified width and height
export function generateEmptyMapString(width, height, emptyCellSymbol) {
  return `${width * height}${emptyCellSymbol}`;
}

// Update map with cell growth.
// mapData should NOT include line breaks, and should be in its uncompressed, decoded format.
export function updateMap(mapData, width, height) {
  const cellEmptySymbol = cell_types.filter((cell) => cell.name === 'empty')[0].symbol;
  let updatedMap = mapData;

  // iterate through map string
  for (let i = 0; i < mapData.length; i++)
  {
    // if the examined cell is of a type that reproduces
    if (mapData[i] === reproducingCellSymbolList[0]) {
      // identify possible locations to place new cell
      let possibleCellPositionIndexes = [];
      
      // look left and right
      // check if cell to left is empty, and whether you're on left border
      if (mapData[i - 1] === cellEmptySymbol  && i % width != 0)
      {
        possibleCellPositionIndexes.push(i - 1);
      }
      // check if cell to right is empty, and whether you're on right border
      if (mapData[i + 1] === cellEmptySymbol  && i + 1 % width != 0)
      {
        possibleCellPositionIndexes.push(i + 1);
      }

      // look above and below
      if (mapData[i - width] === cellEmptySymbol && i - width >= 0)
      {
        possibleCellPositionIndexes.push(i - width);
      }
      if (mapData[i + width] === cellEmptySymbol && i + width < mapData.length)
      {
        possibleCellPositionIndexes.push(i + width);
      }
      
      // pick a position randomly from the possible positions list
      const cellTargetPosition = possibleCellPositionIndexes[Math.floor(Math.random() * possibleCellPositionIndexes.length)];

      // update map that will be returned--not input one
      // If no possible positions are found, do nothing
      // Even if a move is possible, there's a static 2/3 chance to do nothing instead
      if (possibleCellPositionIndexes.length != 0 && Math.floor(Math.random() * 3) > 1) {
        updatedMap = replaceAtIndex(updatedMap, cellTargetPosition, reproducingCellSymbolList[0]);
      }
    }
  }

  return updatedMap;
}

// Helper function for changing characters in strings (since they're immutable in JS)
function replaceAtIndex(sourceString, index, replacement) {
  return sourceString.substring(0, index) + replacement + sourceString.substring(index + replacement.length);
}

// Helper function for adding line breaks based on height and width in decoded maps
export function insertLineBreaks(inputStr, width, height) {
  let outputString = inputStr;
  let linebreaksInserted = 0;
  while (linebreaksInserted < height) {
    // we add the value of linebreaks because the string gets 1 char longer with each new linebreak
    outputString = outputString.slice(0, width * linebreaksInserted + linebreaksInserted) + '\n' + outputString.slice(width * linebreaksInserted + linebreaksInserted);
    linebreaksInserted++;
  }
  return outputString;
};

// Parse map string into full length map, with each cell represented by a character.
export function decodeMap(mapData, width, height, includeLineBreaks = true) {
  
  let outputString = '';
  
  // useful regexes
  const findDigitsRegex = /[0-9]+/;
  const findNonDigit = /[^0-9]/;
  const findNonDigitFollowedByDigit = /[^0-9][0-9]/;
  
  // iterate through string, removing what we parse as we go and appending it to outputString
  while (mapData.length > 0) {
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
        if (includeLineBreaks) {
          outputString = insertLineBreaks(outputString, width, height);
        }
        return outputString;
      }
    }

    // 1 or more standalone symbols case:
    else {
      // if no digits are left in input string, write whole thing to outputString, add linebreaks
      // and then return outputString--we're done with the loop at this point
      if (mapData.search(findDigitsRegex) === -1) {
        outputString += mapData;
        if (includeLineBreaks) {
          outputString = insertLineBreaks(outputString, width, height);
        }
        return outputString;
      } else { 
        // otherwise, write to outputString and remove symbol sequence
        const wordStartIndex = 0; // here, 'word' means non-digit sequence
        const wordEndIndex = mapData.search(findNonDigitFollowedByDigit);

        outputString += mapData.slice(0, wordEndIndex+1);
        mapData = mapData.substring(wordEndIndex + 1);
      }
    }
  }
}
