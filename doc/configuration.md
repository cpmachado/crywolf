# Configuration

Samples can be found in the [resources](../resources/sample-config.json) folder.

## Structure

Base Object
- Key(Bot Name): Bot config(Array of Daemon configs)
  + pair -> a pair to be monitored
  + interval -> interval in milliseconds
  + threshold -> number in percentage to detect oscillation
