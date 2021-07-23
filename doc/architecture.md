# Architecture

In my first iteration of the challenge, lacking time, I decided for a straight walk into the mandatory
requirements and developed a simple daemon that logs whence it detects oscillation, configured in
the app.js

From this refactor, which I consider to be evaluated I thought otherwise.

We have 3 entities, from the start:
- daemon: this entity given a configuration does the ETL.
- bot: this entity manages the aforementioned daemons, with all kind of configurations and setups.
- app: this entitiy manages the bot itself, with a cli to control it, should I have time.

Thus from in an order we have: app -> bot -> daemon

## Multiple configurations

Loaded via a json to app.js
