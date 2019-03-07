const openwhisk = require("openwhisk")

function main(args) {
  let ow = openwhisk()
  return ow.actions.invoke({
    name: "patterndb/read",
    result: true,
    blocking: true,
    params: {
      docid: "michele@sciabarra.com"
    }
  })
}
module.exports.main = main
