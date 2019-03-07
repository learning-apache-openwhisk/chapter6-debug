jest.mock('https')
const main = require('./httptime').main

test('https', () => {
  main({ url: '2000-01-01T00:00:00.000Z' }).then(res => {
    expect(res.body).toBe('00:00:00')
  })
})

test('https2', () => {
  main({ url: '2018-05-02T19:42:34.289Z' }).then(res => {
    expect(res.body).toBe('19:42:34')
  })
})
