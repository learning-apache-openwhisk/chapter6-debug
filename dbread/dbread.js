const openwhisk = require("openwhisk")

function main(args) {
  let ow = openwhisk()
  return ow.actions.invoke({
    name: "contactdb/read-document",
    result: true,
    blocking: true,
    params: {
      docid: "michele@sciabarra.com"
    }
  })
}
module.exports.main = main
