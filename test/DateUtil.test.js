/**
 * @file Tests for the DateUtil.js file.
 * @module test/DateUtil.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DateUtil from '../src/DateUtil.js'

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

describe('addDays', () => {
  test('Add days to a date', () => { })
})

describe('removeDays', () => {
  test('Remove days from a date', () => { })
})
