/* mapUtils.js - utility functions for generating, deleting, and updating Bloomworld maps
  * Author: Allie Zhao
  * Created: 9/3/2023
 */

import { db } from '../firebase.js';
import { DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from '../config/serverSettings.js';


// generate a new empty map string with specified width and height
export function generateEmptyMapString(width, height, emptyCellSymbol) {
  return `${width * height}${emptyCellSymbol}`;
}

export function updateMap(mapData, width, height) {

}
