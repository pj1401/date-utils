/**
 * @file The DateUtil class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DayCounter from './DayCounter.js'
import TimeInterval from './TimeInterval.js'
import WeekCounter from './WeekCounter.js'
import YearCounter from './YearCounter.js'

/**
 * Collection of date utils.
 */
export default class DateUtil {
  #dayCounter
  #weekCounter
  #yearCounter

  /**
   * Initialises a new instance.
   *
   * @param {DayCounter} dayCounter - A day counter instantiated from a class with the same capabilities as DayCounter.
   * @param {WeekCounter} weekCounter - A week counter instantiated from a class with the same capabilities as WeekCounter.
   * @param {YearCounter} yearCounter - A year counter instantiated from a class with the same capabilities as YearCounter.
   */
  constructor (dayCounter = new DayCounter(), weekCounter = new WeekCounter(), yearCounter = new YearCounter()) {
    this.#dayCounter = dayCounter
    this.#weekCounter = weekCounter
    this.#yearCounter = yearCounter
  }

  /**
   * Count days passed or days until the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The number of days.
   */
  countDays (date) {
    return this.#dayCounter.getDays(date)
  }

  /**
   * Get the week number from the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The week number.
   */
  getWeekNumber (date) {
    const dayOfTheYear = this.#dayCounter.getDayOfTheYear(date)
    return this.#weekCounter.getWeekNumber(date, dayOfTheYear)
  }

  /**
   * Get the day of the year from a date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number that represents the day of the year.
   */
  getOrdinalDate (date) {
    return this.#dayCounter.getDayOfTheYear(date)
  }

  /**
   * Get the difference between two dates.
   *
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The number of days between the dates.
   */
  getDaysBetween (date1, date2) {
    return this.#dayCounter.getDaysBetween(date1, date2)
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
    return this.#dayCounter.isBetween(date, new TimeInterval(startDate, endDate))
  }

  /**
   * Get the start of the week.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The start of the week.
   */
  startOfWeek (date) {
    return this.#weekCounter.startOfWeek(date)
  }

  /**
   * Add days to the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to add.
   * @returns {Date} The date with the added days.
   */
  addDays (date, numberOfDays) {
    return this.#dayCounter.addDays(date, numberOfDays)
  }

  /**
   * Remove days from the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to remove.
   * @returns {Date} The date with the added days.
   */
  removeDays (date, numberOfDays) {
    return this.#dayCounter.removeDays(date, numberOfDays)
  }
}
