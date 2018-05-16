const ow = require('openwhisk')

/*
test("invoke email validation", () => {
    ow()
      .actions.invoke({
        name: "testing/strategy-email",
        params: {
          email: "michele@sciabarra.com"
        }
      }).then(res => console.log(res))
}) */

test('validate0', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: {
        email: 'michele@sciabarra.com'
      }
    })
    .then(res => console.log(res)))
