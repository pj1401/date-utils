/**
 * @file The DayCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

/**
 * Represents a DayCounter.
 */
export default class DayCounter {
  /**
   * Count days passed or days until the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The number of days.
   */
  getDays (date) {
    const dateNow = Date.now()
    return Math.abs((dateNow - date) / (1000 * 60 * 60 * 24))
  }
}
