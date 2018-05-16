#!/bin/bash
PACKAGE="${1:?package}"
DATABASE="${2:?database parameters}"

function cleanPackage {
    if test -n "$1"
    then echo "Removing Package Actions $1"
         wsk action list "$1" \
         | tail +2 \
         | awk '{print $1}' \
         | xargs -L1 wsk action delete 
         wsk package delete "$1"
    fi
}

function cleanObjectsByPrefix {
    if test -n "$2"
    then echo "Removing $1 with prefix $2"
        wsk $1 list \
        | tail +1 \
        | awk '{print $1}' \
        | grep "/$2-" \
        | xargs -L1 wsk $1 delete 
    fi
}

function cleanDatabase {
    if test -n "$2"
    then wsk action invoke \
         /whisk.system/cloudant/delete-database \
         -P "$2" -p dbname "$1"
         wsk package delete "$1db"
    fi
}

cleanPackage "$PACKAGE"
cleanObjectsByPrefix rule "$PACKAGE"
cleanObjectsByPrefix trigger "$PACKAGE"
cleanObjectsByPrefix action "$PACKAGE"
cleanDatabase "$PACKAGE" "$DATABASE"