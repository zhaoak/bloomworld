## Name of Student:

Allie Zhao

## Name of Project:

Bloomworld (tenative title)

## Project's Purpose or Goal: (What will it do for users?)

Browser game that allows players to, after a real-time delay, place down different type of "plants" in a two-dimensional grid (an instance of which will be called a "map"), each of which reproduces and spreads to nearby grid squares according to rules defined by the plant's type at regular time intervals (likely every one to five minutes). The goal is to maximize growth; each plant cell grown rewards the player with seeds, which can be used to grow more plants in the grid.

## List the absolute minimum features the project requires to meet this purpose or goal:

- browser client that allows player to:
    - log in with a persistent identity
    - place cells in grid
    - receive updates from backend as grid changes
    - track, spend, and earn seeds

- backend server that:
    - receives actions from players and updates database accordingly
    - handles subscriptions to updates from clients, sends them updates
    - updates database at specific time intervals
    - tracks player seed inventory

- backend database that:
    - holds state of all player maps
    - accepts interval updates from backend server
    - records player authentication details

## What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

- MySql/MariaDB backend database
- ExpressJS backend server
    - authentication via PassportJS
- React client application
    - JSON handling library
    - authentication library
- JSON API format for communication between client and Express server

## If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

- Multiplayer maps, where more than one player can place plants on the same map
- More elaborate visuals
- more plant types (initial plan is to have three)
- longer term player progression systems

## What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

- possibly styling/visual libraries for client
- aside from that, no additional tooling required, just more backend/client code and database changes

## Is there anything else you'd like your instructor to know?

I sure hope I don't get overwhelmed by this
