import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray('z,a')
      expect(result).toEqual(['z', 'a'])
    })
    it.todo('returns ["a", "b"] for text " a , b "')
    it.todo('returns ["a", "b"] for text "a b, c"')
    it.todo('returns ["Jane", "John"] for text "Jane, John"')
    it.todo('returns the array in ascending alphabetical order')
    it.todo('contains each string only once in the resulting array')
    it.todo('returns all items in case ("john" -> "John")')
  })
})
