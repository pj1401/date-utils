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

    // Time difference will be positive if the target date is in the future.
    const timeDifference = this.#getMidnight(date) - this.#getMidnight(dateNow)

    const millisecondsPerDay = 1000 * 60 * 60 * 24
    let days = timeDifference / millisecondsPerDay
    days = days >= 0 ? Math.ceil(days) : Math.floor(days)
    return Math.abs(days)
  }

  /**
   * Get the date with the time set to midnight.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The date with the time set to midnight.
   */
  #getMidnight (date) {
    const targetDate = new Date(date)
    return targetDate.setHours(0, 0, 0, 0)
  }
}
