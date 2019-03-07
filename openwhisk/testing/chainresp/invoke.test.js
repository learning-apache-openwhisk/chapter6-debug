const ow = require('openwhisk')

test("invoke email validation", () => {
    ow()
      .actions.invoke({
        name: "testing/strategy-email",
        params: {
          email: "michele.sciabarra.com"
        }
      }).then(res => 
        expect(res).toMatchSnapshot())
}) 
