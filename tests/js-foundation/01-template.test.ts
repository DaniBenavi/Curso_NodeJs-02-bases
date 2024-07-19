import { emailTemplate } from '../../src/js-foundation/01-template'

describe('js-foundation/01-template.ts', () => {
  test('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ')
  })

  test('emailtemplate should contain a {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/)
    expect(emailTemplate).toMatch(/{{orderId}}/)
  })
})
