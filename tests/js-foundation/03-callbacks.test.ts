import { getUserById } from '../../src/js-foundation/03-callbacks'

describe('js-foundation/03-callbacks.ts', () => {
  test('getUserById should retunr and error if user does not exist', done => {
    const id = 10

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined()

      done()
    })
  })

  test('should return a jhon doe', done => {
    const id = 1

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined()
      expect(user).toStrictEqual({
        id: 1,
        name: 'John Doe'
      })

      done()
    })
  })
})
