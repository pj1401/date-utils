/**
 * @file Tests for the DayCounter.js file.
 * @module test/DayCounter.test.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import DayCounter from '../src/DayCounter'

describe('DayCounter', () => {
  describe('addDays', () => {
    test('Returned Date object is different', () => {
      const date = new Date('2025-01-30')
      const dayCounter = new DayCounter()
      const result = dayCounter.addDays(date, 5)

      expect(result === date).toBeFalsy()
    })

    test('Date argument is unchanged', () => {
      const date = new Date('2025-01-30')
      const dayCounter = new DayCounter()
      const result = dayCounter.addDays(date, 5)

      expect(date).toEqual(new Date('2025-01-30'))
      expect(result).not.toBe(date)
    })
  })

  describe('removeDays', () => {
    test('Returned Date object is different', () => {
      const date = new Date('2025-01-03')
      const dayCounter = new DayCounter()
      const result = dayCounter.removeDays(date, 10)

      expect(result === date).toBeFalsy()
    })

    test('Date argument is unchanged', () => {
      const date = new Date('2025-01-03')
      const dayCounter = new DayCounter()
      const result = dayCounter.removeDays(date, 10)

      expect(date).toEqual(new Date('2025-01-03'))
      expect(result).not.toBe(date)
    })
  })
})
