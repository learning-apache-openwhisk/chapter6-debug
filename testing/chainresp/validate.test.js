const ow = require('openwhisk')

test('validate', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: {
        name: 'Michele',
        email: 'michele.sciabarra.com',
        phone: '1234567890'
      }
    })
    .then(res => expect(res).toMatchSnapshot()))


test('validate0', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: {}
    })
    .then(res => expect(res).toMatchSnapshot()))

test('validate1', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: { name: 'Michele' }
    })
    .then(res => expect(res).toMatchSnapshot()))

test('validate2', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: {
        name: 'Michele',
        email: 'michele@sciabarra.com'
      }
    })
    .then(res => expect(res).toMatchSnapshot()))

test('validate3', () =>
  ow().actions
    .invoke({
      name: 'testing/chainresp-validate',
      params: {
        name: 'Michele',
        email: 'michele@sciabarra.com',
        phone: '1234567890'
      }
    })
    .then(res => expect(res).toMatchSnapshot()))

