/**
 * @file Tests for the WeekCounter.js file.
 * @module test/WeekCounter.test.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import DateUtil from '../src/DateUtil.js'
import WeekCounter from '../src/WeekCounter.js'

describe('WeekCounter', () => {
  describe('startOfWeek', () => {
    test('Get the start of the week after daylight savings starts, Sunday', () => {
      const date = new Date('2025-03-30')
      const weekStart = new Date('2025-03-24')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('DST ends, Sunday', () => {
      const date = new Date('2025-10-26')
      const weekStart = new Date('2025-10-20')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('The week starts in the preceding year, Thursday', () => {
      const date = new Date('2026-01-01')
      const weekStart = new Date('2025-12-29')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('1 September, Monday', () => {
      const date = new Date('2025-09-01')
      const weekStart = new Date('2025-09-01')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('1 July, Tuesday', () => {
      const date = new Date('2025-07-01')
      const weekStart = new Date('2025-06-30')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('2 April, Wednesday', () => {
      const date = new Date('2025-04-02')
      const weekStart = new Date('2025-03-31')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('3 October, Friday', () => {
      const date = new Date('2025-10-03')
      const weekStart = new Date('2025-09-29')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })

    test('2 March 2024, Saturday', () => {
      const date = new Date('2024-03-02')
      const weekStart = new Date('2024-02-26')
      weekStart.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()

      expect(weekCounter.startOfWeek(date)).toEqual(weekStart)
    })
  })

  describe('endOfWeek', () => {
    test('29 December 2025, Monday, the week ends in the following year', () => {
      const date = new Date('2025-12-29')
      const weekEnd = new Date('2026-01-04')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('27 February 2024, Tuesday, returns 2024-03-03', () => {
      const date = new Date('2024-02-27')
      const weekEnd = new Date('2024-03-03')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('22 October 2025, Wednesday, DST ends, returns 2025-10-26', () => {
      const date = new Date('2025-10-22')
      const weekEnd = new Date('2025-10-26')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('27 March 2025, Thursday, DST starts, returns 2025-03-30', () => {
      const date = new Date('2025-03-27')
      const weekEnd = new Date('2025-03-30')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('31 October 2025, Friday, returns 2025-11-02', () => {
      const date = new Date('2025-10-31')
      const weekEnd = new Date('2025-11-02')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('31 May 2025, Saturday, returns 2025-06-01', () => {
      const date = new Date('2025-05-31')
      const weekEnd = new Date('2025-06-01')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })

    test('31 August 2025, Sunday, returns 2025-08-31', () => {
      const date = new Date('2025-08-31')
      const weekEnd = new Date('2025-08-31')
      weekEnd.setHours(0, 0, 0, 0)
      const weekCounter = new WeekCounter()
      expect(weekCounter.endOfWeek(date)).toEqual(weekEnd)
    })
  })

  describe('getWeekNumber', () => {
    describe('Beginning of the year', () => {
      test('1 January 2021, Friday, returns 53', () => {
        const date = new Date('2021-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('4 January 2021, Monday, returns 1', () => {
        const date = new Date('2021-01-04')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('1 January 2022, Saturday, returns 52', () => {
        const date = new Date('2022-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(52)
      })

      test('3 January 2022, Monday, returns 1', () => {
        const date = new Date('2022-01-03')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('1 January 2024, Monday, returns 1', () => {
        const date = new Date('2024-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('1 January 2025, Wednesday, returns 1', () => {
        const date = new Date('2025-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('1 January 2027, Friday, returns 53', () => {
        const date = new Date('2027-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('4 January 2027, Monday, returns 1', () => {
        const date = new Date('2027-01-04')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('1 January 2033, Saturday, returns 53', () => {
        const date = new Date('2033-01-01')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })
    })

    describe('End of the year', () => {
      test('27 December 2004, Monday, returns 53', () => {
        const date = new Date('2004-12-27')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('31 December 2004, Friday, returns 53', () => {
        const date = new Date('2004-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('31 December 2012, Monday, returns 1', () => {
        const date = new Date('2012-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('28 December 2015, Monday, returns 53', () => {
        const date = new Date('2015-12-28')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('31 December 2015, Thursday, returns 53', () => {
        const date = new Date('2015-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('28 December 2020, Monday, returns 53', () => {
        const date = new Date('2020-12-28')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('31 December 2020, Thursday, returns 53', () => {
        const date = new Date('2020-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(53)
      })

      test('25 December 2023, Monday, returns 52', () => {
        const date = new Date('2023-12-25')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(52)
      })

      test('31 December 2023, Sunday, returns 52', () => {
        const date = new Date('2023-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(52)
      })

      test('29 December 2025, Monday, returns 1', () => {
        const date = new Date('2025-12-29')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })

      test('31 December 2025, Wednesday, returns 1', () => {
        const date = new Date('2025-12-31')
        const dateUtil = new DateUtil()
        expect(dateUtil.getWeekNumber(date)).toEqual(1)
      })
    })
  })
})
