// How many seconds pass between each iteration of the server processing map updates.
// I've done no performance testing yet--setting this too low with too many maps might make the server hang!!
export const UPDATE_INTERVAL_LENGTH = 10;

// Default maximum number of maps a user can own.
// Can be manually changed per user in database.
export const DEFAULT_MAX_MAPS_PER_USER = 1;

// Default map size in cells.
export const DEFAULT_MAP_WIDTH = 32;
export const DEFAULT_MAP_HEIGHT = 32;

// Whether to update the database's `cell_types` list with the server's cell type list on server startup.
export const UPDATE_FIREBASE_CELLTYPE_LIST_ON_STARTUP = false; 
