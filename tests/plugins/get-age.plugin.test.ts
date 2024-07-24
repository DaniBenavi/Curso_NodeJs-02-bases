import { getAge } from '../../src/plugins/get-age.plugin'

describe('plugins/get-age.plugin.ts', () => {
  test('should retunr of a age person', () => {
    const birthdate = '1999-07-19'
    const age = getAge(birthdate)

    expect(typeof age).toBe('number')
  })

  test('get should return current age person', () => {
    const birthdate = '1999-07-19'
    const age = getAge(birthdate)

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear()

    expect(age).toBe(calculatedAge)
  })
    
  test('getAge should return 0 years', () => {

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthdate = '1995-10-21';
    const age = getAge(birthdate);

    expect( age ).toBe(0);
    expect( spy ).toHaveBeenCalledWith();

  });
})
