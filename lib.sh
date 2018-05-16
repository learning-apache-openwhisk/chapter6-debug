DEPLOY_LIB=${1:-}
function deployLib {
    # deploy only the specified lib, if any
    if test -n "$DEPLOY_LIB"
    then if test "$1" != "$DEPLOY_LIB"
         then return
         fi
    fi
    base="${1%%.js}"
    here="$(realpath .)"
    parent="$(dirname $here)"
    prefix="$(basename $here)"
    package="$(basename $parent)"
    if test -e $base.json
    then json="-P $base.json"
    else json=""
    fi
    cp $1 index.js
    echo '{"main": "index.js"}' >package.json
    test -e $base.zip && rm $base.zip
    zip -q -r --exclude='*.zip' --exclude="*.test.js" $base.zip index.js package.json lib
    rm index.js package.json
    #pushd ..
    #test -e lib && zip -r $here/$base.zip lib 
    #popd
    wsk action update $package/$prefix-$base $base.zip $json --kind nodejs:6
}
