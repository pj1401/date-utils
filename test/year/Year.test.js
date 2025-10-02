/**
 * @file Tests for the Year.js file.
 * @module test/year/Year.test.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import YearTester from './YearTester.js'

describe('Year', () => {
  describe('isLeapYear', () => {
    describe('true', () => {
      test('1600', () => {
        const yearTester = new YearTester(new Date('1600-01'))
        yearTester.runIsLeapYearTestTrue()
      })
      test('2000', () => {
        const yearTester = new YearTester(new Date('2000-01'))
        yearTester.runIsLeapYearTestTrue()
      })
      test('2024', () => {
        const yearTester = new YearTester(new Date('2024-01'))
        yearTester.runIsLeapYearTestTrue()
      })
      test('2400', () => {
        const yearTester = new YearTester(new Date('2400-01'))
        yearTester.runIsLeapYearTestTrue()
      })
    })
    describe('false', () => {
      test('1900', () => {
        const yearTester = new YearTester(new Date('1900-01'))
        yearTester.runIsLeapYearTestFalse()
      })
      test('2025', () => {
        const yearTester = new YearTester(new Date('2025-01'))
        yearTester.runIsLeapYearTestFalse()
      })
      test('2026', () => {
        const yearTester = new YearTester(new Date('2026-01'))
        yearTester.runIsLeapYearTestFalse()
      })
      test('2100', () => {
        const yearTester = new YearTester(new Date('2100-01'))
        yearTester.runIsLeapYearTestFalse()
      })
    })
  })
})
