const wordcount = require("./wordcount").main

test('wordcount simple', () => {
    res = wordcount({text: "a b a"})
    expect(res["a"]).toBe(2)
    expect(res["b"]).toBe(1)
    //console.log(res)
})
