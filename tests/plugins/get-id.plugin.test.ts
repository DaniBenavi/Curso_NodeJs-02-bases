import { getUUID } from '../../src/plugins/get-id.plugin'

describe('plugins/get-id.plugin.ts', () => {
  test('getUUID', () => {
    const getId = getUUID()

    expect(typeof getId).toBe('string')
    expect(getId.length).toBe(36)
  })
})
