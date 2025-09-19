/**
 * @file The DateUtil class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import DayCounter from './DayCounter.js'

/**
 * Collection of date utils.
 */
export default class DateUtil {
  /**
   * Count days passed or days until the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The number of days.
   */
  countDays (date) {
    const dayCounter = new DayCounter()
    return dayCounter.getDays(date)
  }

  /**
   * Get the week number from the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The week number.
   */
  getWeekNumber (date) {
    return null
  }

  /**
   * Get the difference between two dates.
   *
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   */
  getTimeBetween (date1, date2) {
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
