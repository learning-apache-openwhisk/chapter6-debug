REV=$(wsk action invoke contactdb/read-document -p docid michele@sciabarra.com -r 2>/dev/null| jq -r ._rev)
if test -n "$REV"
then wsk action invoke contactdb/delete-document -p docid michele@sciabarra.com -p docrev "$REV"
fi
wsk action invoke contactdb/create-document -p doc '{ "_id": "michele@sciabarra.com", "name":"Michele"}'
