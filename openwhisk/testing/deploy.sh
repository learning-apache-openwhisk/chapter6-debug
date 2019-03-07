#!/bin/bash
cd "$(dirname $0)"

# validator
sh strategy/deploy.sh
sh chainresp/deploy.sh


