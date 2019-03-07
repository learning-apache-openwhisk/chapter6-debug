#!/bin/bash
wsk package update testing
CODE="function main() { return { body: new Date() } }"
wsk action update testing/now <(echo $CODE) \
   --kind nodejs:6 --web true
URL=$(wsk action get testing/now --url | tail -1)
wsk action update testing/httptime httptime.js -p url "$URL" --web true
wsk action get testing/httptime --url
