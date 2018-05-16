cd "$(dirname $0)"
source ../../lib.sh
wsk package update testing
deployLib email.js
deployLib phone.js
deployLib name.js

