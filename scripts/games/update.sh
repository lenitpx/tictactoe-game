#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${IS_OVER}"'"
    }
  }'

echo
