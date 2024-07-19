import { characters } from '../../src/js-foundation/02-destructuring'

describe('js-foundation/02-destructuring.ts', () => {
  test('Characters should contain Flash and superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  test('Characters should contain Flash and superman', () => {
    const [flash, superman] = characters

    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })
})
