import { buildMakePerson } from '../../src/js-foundation/05-factory'

function safeStringify(obj: { id: string; name: string; birthdate: string; age: number }, indent = 2) {
  const cache = new Set()
  const json = JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return '[Circular]'
        }
        cache.add(value)
      }
      return value
    },
    indent
  )
  cache.clear()
  return json
}

describe('js-foundation/05-factory.ts', () => {
  const getAge = () => 34
  const getUUID = () => '1234'
  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getAge, getUUID })

    expect(typeof makePerson).toBe('function')
  })

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-10-21' })

    const expectedPerson = {
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 34
    }

    expect(safeStringify(johnDoe)).toEqual(safeStringify(expectedPerson))
  })
})
