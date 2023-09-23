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

### Storage format

This backend server expects the Firebase Realtime Database to be structured like this:

```json
{
    "users": {
        "[user key (number, same as user_id)]": {
            "user_id": [user id (number)],
            "display_name": [display name (string)],
            "seeds": [seed_amount (number)],
            "owned_maps": {
                [map ID (number)]: true,
                ...
            }
        }
        ...
    }

    "maps": {
        "[map key (number)]": {
            "map_data": {map data (see "map data format" section)},
            "owner": {user_id of owner}
        },
        ...
    },

}
```

### Map data format

WIP

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
