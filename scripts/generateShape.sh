#!/usr/bin/env bash


# find ./app/shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


srcDir=$(pwd)/src/
shapeDir=$(pwd)/shapes/
shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

echo "=========================================================================="
echo $srcDir
echo $shapeDir
echo $shapeFile

./node_modules/.bin/brainbox &
last_pid=$!
sleep 3
phantomjs  ./src/index.js $shapeFile $srcDir $shapeDir
kill -KILL $last_pid
