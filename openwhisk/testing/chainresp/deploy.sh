#!/bin/bash
wsk action update  testing/chainresp-validate \
 --sequence testing/strategy-name,testing/strategy-email,testing/strategy-phone 
