# MKR2 - mr__Kuko's Racing 2
## Requirements
* in case you don't want to change code in **account_manager.lua** to make it your own bank system friendly you will need this
* [es_extended](https://github.com/esx-framework/es_extended/tree/v1-final)

## How to install:
- Download https://github.com/mrkuko/mkr2.0/releases
- extract to your directory and in type **start MKR** in your server.cfg

### Discription:
- Custom race events
- Basic HTML overlay
- Scoreboard with top 10 for every race
- Config options:
  - Name, position & color
  - Size & type of marker
  - Car model for race
  - Reward
  - Time to finish
  - Checkpoints
- Change language in **config.json** and **html/locales.json**
- You can overwrite code with money operation in **account_manager.lua** in case, you don't use esx base, and make it your own base-friendly, but keep triggers for client, because if you delete them, you'll break whole script

### Adding new route for race example pattern:
- paste this code under last route in your **config.json** file
```json
{
      "name": "Name your race",
      "pos": {
        "X": 100.0,
        "Y": 100.0,
        "Z": 100.0
      },
      "heading": 100.0,
      "bColor": 1,
      "bType": 430,
      "size": {
        "X": 2.0,
        "Y": 2.0,
        "Z": 2.0
      },
      "marker": 5,
      "car": "retinue",
      "character": "CHAR_HUNTER",
      "entry": 500,
      "reward": 5000,
      "ttf": 180000,
      "points": [
        {
          "X": 2677.375,
          "Y": 1644.27,
          "Z": 23.635
        },
        {
          "X": 2539.940,
          "Y": 1587.425,
          "Z": 29.340
        }
      ]
    }
```
- and don't forgot to add "," after end of previous race, it's a json :D

## Explanation
```lua
{
      "name": "Name your race",     --name of your race
      "pos": {                      --position of enter-point
        "X": 100.0,
        "Y": 100.0,
        "Z": 100.0
      },
      "heading": 100.0,             --heading of spawned vehicle
      "bColor": 1,                  --color for race from colors here: https://docs.fivem.net/docs/game-references/blips/
      "bType": 430,                 --blips from the same site
      "size": {                     --size of the marker
        "X": 2.0,
        "Y": 2.0,
        "Z": 2.0
      },
      "marker": 5,                  --type of enter-marker from here: https://docs.fivem.net/docs/game-references/markers/
      "car": "retinue",             --name of the model of the car for this race
      "character": "CHAR_HUNTER",   --photo of character https://wiki.gtanet.work/index.php?title=Notification_Pictures
      "entry": 500,                 --price you need to pay to enter the race
      "reward": 5000,               --reward that you will get if you finished the race sooner than ttf ran away
      "ttf": 180000,                --time to fail, in miliseconds
      "points": [                   --list of coordinations for actual checkpoints
        {
          "X": 2677.375,
          "Y": 1644.27,
          "Z": 23.635
        },
        {
          "X": 2539.940,
          "Y": 1587.425,
          "Z": 29.340
        }
      ]
    }
```
