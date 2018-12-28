## Realtime Redux Game Architecture

A simple experiment to see whether Redux would be suitable for managing the state of a real-time game. Uses redux-saga for handling side-effects such as character movement.

Potential advantages of this approach:
* An event-sourced, reproducible game state
* Easy state restoration and serialisation
* State synchronisation between clients and server
* Use time-travel to step through the game state

![Screenshot](https://i.imgur.com/ssUtqh6.png)
