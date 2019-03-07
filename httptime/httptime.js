const https = require("https")

function main(args) {
  return new Promise(resolve => {
    let time = ""
    https.get(args.url, (resp) => {
      resp.on('data', (data) => {
        time += data
      })
      resp.on('end', () => {
        var a = /(\d\d:\d\d:\d\d)/.exec(time)
        resolve({body:a[0]})
      })
     })
   })
}

module.exports.main = main
