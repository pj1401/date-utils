/**
 * @file Tests for the Day.js file.
 * @module test/day/Day.test.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import DayTester from './DayTester.js'

describe('Day', () => {
  describe('getFutureDate', () => {
    test('30 January 2025, Thursday, add 5 days, returns 2025-02-04', () => {
      const dayTester = new DayTester(new Date('2025-01-30'))
      dayTester.runFutureDateTest(5, new Date('2025-02-04'))
    })
  })

  describe('getPastDate', () => {
    test('3 January 2025, Friday, remove 10 days, returns 2024-12-24', () => {
      const dayTester = new DayTester(new Date('2025-01-03'))
      dayTester.runPastDateTest(10, new Date('2024-12-24'))
    })
  })
})
