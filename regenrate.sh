#!/usr/bin/env bash


# find ./shapes/ -name '*.shape' -exec ./regenrate.sh {} \;


shapeFile=$(cd "$(dirname "$1")"; pwd)/$(basename "$1")

echo "=========================================================================="
echo $shapeFile

phantomjs  /Users/d023280/Documents/workspace/brainbox.shapes/src/index.js $shapeFile /Users/d023280/Documents/workspace/brainbox.shapes/src/ /Users/d023280/Documents/workspace/brainbox.shapes/shapes/
