#!/usr/bin/env bash


# find ./app/shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

echo "=========================================================================="
echo $shapeFile

phantomjs  ./src/index.js $shapeFile ./src ./shapes/
