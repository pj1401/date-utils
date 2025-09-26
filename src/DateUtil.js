/**
 * @file The DateUtil class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DayCounter from './DayCounter.js'
import WeekCounter from './WeekCounter.js'

/**
 * Collection of date utils.
 */
export default class DateUtil {
  #dayCounter
  #weekCounter

  /**
   * Initialises a new instance.
   *
   * @param {DayCounter} dayCounter - A day counter instantiated from a class with the same capabilities as DayCounter.
   * @param {WeekCounter} weekCounter - A week counter instantiated from a class with the same capabilities as WeekCounter.
   */
  constructor (dayCounter = new DayCounter(), weekCounter = new WeekCounter()) {
    this.#dayCounter = dayCounter
    this.#weekCounter = weekCounter
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
    return this.#weekCounter.getWeekNumber(date)
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
   * Add days to the date.
   *
   * @param {Date} date - The specified date.
   */
  addDays (date) {
  }

  /**
   * Remove days from the date.
   *
   * @param {Date} date - The specified date.
   */
  removeDays (date) {
  }
}
