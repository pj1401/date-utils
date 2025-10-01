/**
 * @file The DateUtil class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Day from './Day.js'
import TimeInterval from './TimeInterval.js'
import Week from './Week.js'
import YearCounter from './YearCounter.js'

/**
 * Collection of date utils.
 */
export default class DateUtil {
  #yearCounter

  /**
   * Initialises a new instance.
   *
   * @param {YearCounter} yearCounter - A year counter instantiated from a class with the same capabilities as YearCounter.
   */
  constructor (yearCounter = new YearCounter()) {
    this.#yearCounter = yearCounter
  }

  /**
   * Count days passed or days until the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The number of days.
   */
  countDays (date) {
    const day = new Day(date)
    return day.getDays()
  }

  /**
   * Get the week number from the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The week number.
   */
  getWeekNumber (date) {
    const week = new Week(date)
    return week.getWeekNumber()
  }

  /**
   * Get the day of the year from a date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number that represents the day of the year.
   */
  getOrdinalDate (date) {
    const day = new Day(date)
    return day.getDayOfYear(date)
  }

  /**
   * Get the difference between two dates.
   *
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The number of days between the dates.
   */
  getDaysBetween (date1, date2) {
    const day = new Day(date1)
    return day.getDaysBetween(date2)
  }

  /**
   * Get the quarter of the year the date is in.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number representing the quarter of the year.
   */
  getQuarter (date) {
    return this.#yearCounter.getYearQuarter(date)
  }

  /**
   * Check if a date is in the interval.
   *
   * @param {Date} date - The date to check.
   * @param {Date} startDate - The start date.
   * @param {Date} endDate - The end date.
   * @returns {boolean} True if the date is in the interval.
   */
  isBetween (date, startDate, endDate) {
    const day = new Day(date)
    return day.isBetween(new TimeInterval(startDate, endDate))
  }

  /**
   * Get the start of the week.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The start of the week.
   */
  startOfWeek (date) {
    const week = new Week(date)
    return week.getStartOfWeek(date)
  }

  /**
   * Get the end of the week.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The end of the week.
   */
  endOfWeek (date) {
    const week = new Week(date)
    return week.getEndOfWeek(date)
  }

  /**
   * Add days to the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to add.
   * @returns {Date} The date with the added days.
   */
  addDays (date, numberOfDays) {
    const day = new Day(date)
    return day.getFutureDate(numberOfDays)
  }

  /**
   * Remove days from the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to remove.
   * @returns {Date} The date with the added days.
   */
  removeDays (date, numberOfDays) {
    const day = new Day(date)
    return day.getPastDate(numberOfDays)
  }
}
