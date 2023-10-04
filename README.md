# Bloomworld

#### By Allie Zhao

In-browser online cellular automata inspired farming/idle game

## Using:

### Client

- React

### Backend

- [ExpressJS](https://expressjs.com/)
- [Firebase Realtime Database](https://firebase.google.com/) for database services and auth
- ~[MySQL Node.js client library](https://github.com/mysqljs/mysql)~
- ~Basic username/password authentication via [Passport](http://www.passportjs.org/)~

### ~Database~

- ~[MariaDB](https://mariadb.com/) (client-compatible with MySQL)~

## What is this?

Bloomworld is a browser-based online game inspired by idle games and [cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton).
In it, players plant various kinds of plants, each one taking up a single cell on a grid.
Every five real-world minutes, the plants reproduce, spreading to nearby cells according to rules specific to each type of plant. Each time a new cell is created, the player earns seeds!
Seeds are used to fill in new cells with different types of plants, the goal being to spread plant life as far as possible!


## Setup/Installation

### Data storage format

This backend server expects the Firebase Realtime Database to be structured like this:

```
{
    // list of users
    "users": {
        "[user key (number, same as user_id)]": {
            "user_id": [user id (number)],
            "display_name": [display name (string)],
            "seeds": [amount of currency owned by player (number)],
            "max_maps": [max number of maps player is allowed to own (number)],
            "owned_maps": {
                [map ID (number)]: true,
                ...
            }
        }
        ...
    }

    // list of maps
    "maps": {
        "[map key (number)]": {
            "map_data": [map data (see "map data format" section)],
            "width": [width of map, in number of cells (number)],
            "height": [height of map, in number of cells (number)],
            "owner": [user_id of owner (number)],
            "frozen": [whether map should be updated each update interval or not (bool)]
        },
        ...
    },
    
    // list of cell types: retrieved by clients on startup
    "cell_types": {
        "0": {
            "name": "empty",
            "symbol": "-",
            "spread_radius": 0,
            "cost": 0,
            "placeable": false
        },
        "1": {
            "name": "Solarose",
            "symbol": "A",
            "spread_radius": 1,
            "cost": 5, // cost in seeds to place one of these cells
            "placeable": true,
            "reward": 3 // how many seeds a player earns each time a new cell of this type is created
        },
        ...
        }

    // list of user requests
    // When a user wants to place a cell on a map, the request is placed here.
    // Once the request is executed, the server removes the request from the database.
    // Users must own a map for the server to allow changes to it.
    "requests": {
            "[user_id of owner]": {
                "0": { // if users can have multiple maps, we should be able to support multiple requests per user
                    // allowed operations:
                    // PLACE: place a cell at a specific location on a specific map
                    // NEW_MAP: generate new empty map owned by player
                    // DELETE_MAP: delete map owned by player
                    "operation": [type of request (string)],
                    
                    // these properties are used for 'PLACE' operations and may be omitted for others
                    "cell_type": [type of cell (number), identified by key in `cell_types` list],
                    // cell_location value determined by number of cell when reading map from left to right, top to bottom, where first cell is 1
                    // therefore, the eighth cell in the third row where rows are 15 cells long would be be at cell_location 53
                    "cell_location": [where to place cell in map for `place` operation (number)],

                    // these properties are used for 'DELETE_MAP' and 'PLACE' operations and may be omitted for others
                    "map_id": [map id (number)]
                }
                ...
            }
    }
}
```

### Map data format

Maps are encoded as strings, and when read left to right, represent all cells in the map, starting from the upper leftmost cell. 
Cell types are indicated by their `symbol`, listed in the `cell_types` section of the database for each cell.
When encoding a map, when the end of a row of cells is reached, encoding continues from the leftmost cell of the row beneath.

No indicator for the ends or beginning of rows is encoded; when decoding, it is expected that the width and height of the map are pulled from the database.

Contiguous areas of cells, encoded with the format specified, are represented by two values: a number, then the cell symbol, indicating the number of contiguous cells and cell type, respectively, rather than being repeated in the string.
**When a cell has no neighbors of the same type, the number is not provided.**
This also means that a cell type's symbol **cannot not be a numerical digit**, as those are reserved for representing contiguous areas in map strings.

*Example*: The following 10x3 map would be represented by the string `10-10A4-A-A-A-`.
```
+*********************+
* - - - - - - - - - - *
* A A A A A A A A A A *
* - - - - A - A - A - *
+*********************+
```

## Research & Planning Log

#### Friday, 9/22/2023

- 1:45PM - Investigate Firebase datatypes, consider using Firebase as a DB rather than a MySQL instance
- 2:15PM - Help Pier with his API stuff
- 3:00PM - setting up Firebase Realtime Database
- 3:30PM - setting up express
- 4:00PM - reading docs on Realtime Database data structuring
- 4:40PM - writing test code to read/write to DB


## Known Bugs

None yet!

## License

GNU GPLv2

Copyright (c) 2023 Allie Zhao
