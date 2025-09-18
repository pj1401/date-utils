/**
 * @file Tests for the DateUtil.js file.
 * @module test/DateUtil.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DateUtil from '../src/DateUtil.js'

describe('count days', () => {
  test('Count days passed', () => {
    // Get the date from one week ago.
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    const dateUtil = new DateUtil()
    expect(dateUtil.countDays(oneWeekAgo)).toEqual(7)
  })

  test('Count days until', () => {
    const nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)

    const dateUtil = new DateUtil()
    expect(dateUtil.countDays(nextWeek)).toEqual(7)
  })
})

describe('Get week number', () => {
  test('Get week number', () => {
    const date = new Date(2025, 8, 17)
    const weekNumber = 38

    const dateUtil = new DateUtil()
    expect(dateUtil.getWeekNumber(date)).toEqual(weekNumber)
  })
})

describe('Get time between', () => {
  test('Get number of days between two dates', () => {})
  test('Get negative days if the date2 is earlier than date1', () => {})
})

describe('Add days', () => {
  test('Add days to a date', () => {})
})

describe('Remove days', () => {
  test('Remove days from a date', () => {})
})
