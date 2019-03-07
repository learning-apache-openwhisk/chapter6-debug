const main = require("./email").main
const checkEmail = require("./email").checkEmail 

test("checkEmail", () => {
	expect(checkEmail("michele@sciabarra.com")).toBe(true)
	expect(checkEmail("http://michele.sciabarra.com")).toBe(false)
})


test("validate email", () => {
    //console.log(main({ email: "michele@sciabarra.com" }))
    expect(main({email: "michele@sciabarra.com"}).message[0]).toBe('email: michele@sciabarra.com')
    //console.log(main({ email: "michele.sciabarra.com" }))
    expect(main({email: "michele.sciabarra.com"}).errors[0]).toBe('michele.sciabarra.com does not look like an email')
})

