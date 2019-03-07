//process.env = require("./wskprops")
//console.log(process.env)
const main = require("./dbread").main

test("read record", () => {
   main().then(r => {
     //console.log(r)
     expect(r.value.name).toBe("Michele")
    })
})
