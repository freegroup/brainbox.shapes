#!/usr/bin/env bash

# causes the shell to exit if any subcommand or pipeline returns a non-zero status.
set -e

function increment() {
     local v=$1
     if [ -z $2 ]; then
        local rgx='^((?:[0-9]+\.)*)([0-9]+)($)'
     else
        local rgx='^((?:[0-9]+\.){'$(($2-1))'})([0-9]+)(\.|$)'
        for (( p=`grep -o "\."<<<".$v"|wc -l`; p<$2; p++)); do
           v+=.0; done; fi
     val=`echo -e "$v" | perl -pe 's/^.*'$rgx'.*$/$2/'`
     echo "$v" | perl -pe s/$rgx.*$'/${1}'`printf %0${#val}s $(($val+1))`/
}

VERSION=`cat version.txt`
VERSION=$(increment $VERSION)
echo $VERSION > version.txt