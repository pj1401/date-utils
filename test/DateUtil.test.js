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

  test('Get week number at the beginning of the year', () => {
    const date = new Date('2025-01-01')

    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(1)
  })

  test('31 December 2023, Sunday, returns 52', () => {
    const date = new Date('2023-12-31')
    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(52)
  })

  test('31 December 2025, Wednesday, returns 1', () => {
    const date = new Date('2025-12-31')
    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(1)
  })

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

  test('1 January 2024, Monday, returns 1', () => {
    const date = new Date('2024-01-01')
    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(1)
  })

  test('1 January 2027, Friday, returns 53', () => {
    const date = new Date('2027-01-01')
    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(53)
  })
})

describe('getTimeBetween', () => {
  test('Get number of days between two dates', () => {})
  test('Get negative days if the date2 is earlier than date1', () => {})
})

describe('addDays', () => {
  test('Add days to a date', () => {})
})

describe('removeDays', () => {
  test('Remove days from a date', () => {})
})
