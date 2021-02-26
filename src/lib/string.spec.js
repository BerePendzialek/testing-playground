import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray('a,b')
      expect(result).toEqual(['A', 'B'])
    })

    it('returns ["a", "b"] for text " a , b "', () => {
      const result = commaSeparatedToArray(' a, b ')
      expect(result).toEqual(['A', 'B'])
    })

    it('returns ["a", "b"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('a b, c')
      expect(result).toEqual(['A b', 'C'])
    })

    it('returns ["Jane", "John"] for text "Jane, John"', () => {
      const result = commaSeparatedToArray('Jane, John')
      expect(result).toEqual(['Jane', 'John'])
    })

    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('John, Jane, Ben')
      expect(result).toEqual(['Ben', 'Jane', 'John'])
    })

    it('contains each string only once in the resulting array', () => {
      const result = commaSeparatedToArray('Ben, Ben, John')
      expect(result).toEqual(['Ben', 'John'])
    })

    it('returns all items in case ("john" -> "John")', () => {
      const result = commaSeparatedToArray('benito, emi')
      expect(result).toEqual(['Benito', 'Emi'])
    })
  })
})
