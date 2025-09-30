/**
 * @file Tests for the DateUtil.js file.
 * @module test/DateUtil.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DateUtil from '../src/DateUtil.js'

describe('DateUtil', () => {
  describe('countDays', () => {
    test('Count days passed', () => {
      // Get the date from one week ago.
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

      const dateUtil = new DateUtil()
      expect(dateUtil.countDays(oneWeekAgo)).toEqual(-7)
    })

    test('Count days until', () => {
      const nextWeek = new Date()
      nextWeek.setDate(nextWeek.getDate() + 7)

      const dateUtil = new DateUtil()
      expect(dateUtil.countDays(nextWeek)).toEqual(7)
    })
  })

  describe('getWeekNumber', () => {
    test('Get week number', () => {
      const date = new Date('2025-09-17')
      const weekNumber = 38

      const dateUtil = new DateUtil()
      expect(dateUtil.getWeekNumber(date)).toEqual(weekNumber)
    })
  })

  describe('getOrdinalDate', () => {
    test('30 September 2025, returns 273', () => {
      const date = new Date('2025-09-30')
      const dateUtil = new DateUtil()
      expect(dateUtil.getOrdinalDate(date)).toEqual(273)
    })
  })

  describe('getDaysBetween', () => {
    test('Get number of days between two dates', () => {
      const date1 = new Date('2025-09-15')
      const date2 = new Date('2025-09-22')

      const dateUtil = new DateUtil()
      expect(dateUtil.getDaysBetween(date1, date2)).toEqual(7)
    })

    test('Get negative days if the date2 is earlier than date1', () => {
      const date1 = new Date('2025-09-15')
      const date2 = new Date('2025-09-08')

      const dateUtil = new DateUtil()
      expect(dateUtil.getDaysBetween(date1, date2)).toEqual(-7)
    })

    test('Over one month between dates, returns 32', () => {
      const date1 = new Date('2025-08-14')
      const date2 = new Date('2025-09-15')

      const dateUtil = new DateUtil()
      expect(dateUtil.getDaysBetween(date1, date2)).toEqual(32)
    })

    test('Over one year between dates, returns 367', () => {
      const date1 = new Date('2024-09-13')
      const date2 = new Date('2025-09-15')

      const dateUtil = new DateUtil()
      expect(dateUtil.getDaysBetween(date1, date2)).toEqual(367)
    })
  })

  describe('isBetween', () => {
    test('Date is in the interval', () => {
      const date = new Date('2025-09-30')
      const startDate = new Date('2025-09-29')
      const endDate = new Date('2025-10-01')

      const dateUtil = new DateUtil()
      expect(dateUtil.isBetween(date, startDate, endDate)).toBeTruthy()
    })

    test('Date is not in the interval', () => {
      const date = new Date('2024-12-31')
      const startDate = new Date('2025-01-01')
      const endDate = new Date('2025-12-31')

      const dateUtil = new DateUtil()
      expect(dateUtil.isBetween(date, startDate, endDate)).toBeFalsy()
    })
  })

  describe('addDays', () => {
    test('Add days to a date', () => {
      const date = new Date('2025-01-30')
      const dateUtil = new DateUtil()
      const result = dateUtil.addDays(date, 5)

      expect(result.getDate()).toEqual(4)
      expect(result.getMonth()).toEqual(1) // February gives 1
    })

    test('Handle turn of the year', () => {
      const date = new Date('2025-12-31')
      const dateUtil = new DateUtil()
      const result = dateUtil.addDays(date, 2)

      expect(result.getDate()).toEqual(2)
      expect(result.getMonth()).toEqual(0)
      expect(result.getFullYear()).toEqual(2026) // Expected: 2 January 2026
    })
  })

  describe('removeDays', () => {
    test('Remove days from a date', () => {
      const date = new Date('2025-01-03')
      const dateUtil = new DateUtil()
      const result = dateUtil.removeDays(date, 10)

      expect(result.getFullYear()).toEqual(2024)
      expect(result.getMonth()).toEqual(11) // Expected: December 2024
    })
  })
})
