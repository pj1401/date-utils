/**
 * @file The DayTester class.
 * @module test/day/DayTester.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import Day from '../../src/Day.js'

/**
 * Represents a test runner for the Day class.
 */
export default class DayTester {
  day
  date

  /**
   * Initialises a new instance.
   *
   * @param {Date} date - A date object that represents the day.
   */
  constructor (date) {
    this.day = new Day(date)
    this.date = new Date(date)
  }

  /**
   * Run tests for the getFutureDate method.
   *
   * @param {number} numberOfDays - The number of days to add.
   * @param {Date} expected - The expected returned date.
   */
  runFutureDateTest (numberOfDays, expected) {
    const dayOriginal = new Day(this.date)
    const result = this.day.getFutureDate(numberOfDays)

    // Returned Date object is different.
    expect(result === this.date).toBeFalsy()
    expect(result).not.toBe(this.date)

    // Day object was unchanged.
    expect(this.day).toEqual(dayOriginal)

    expect(result).toEqual(expected)
  }

  /**
   * Run tests for the getPastDate method.
   *
   * @param {number} numberOfDays - The number of days to remove.
   * @param {Date} expected - The expected returned date.
   */
  runPastDateTest (numberOfDays, expected) {
    const dayOriginal = new Day(this.date)
    const result = this.day.getPastDate(numberOfDays)

    // Returned Date object is different.
    expect(result === this.date).toBeFalsy()
    expect(result).not.toBe(this.date)

    // Day object was unchanged.
    expect(this.day).toEqual(dayOriginal)

    expect(result).toEqual(expected)
  }
}
