#!/usr/bin/env bash


# find ./app/shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


shapeDir=$(pwd)/shapes/
shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

./node_modules/.bin/brainbox &
last_pid=$!
sleep 1
node  ./src/index.js $shapeFile $shapeDir
kill -KILL $last_pid
