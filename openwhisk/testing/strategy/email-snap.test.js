const main = require("./email").main

test("validate email with snapshot", () => {
    expect(main({email: "michele.sciabarra@gmail.com"})).toMatchSnapshot()
    expect(main({email: "michele.sciabarra.com"})).toMatchSnapshot()
})
