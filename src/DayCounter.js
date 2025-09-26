/**
 * @file The DayCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24

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
    const dateNow = this.#getMidnightTimestamp(Date.now())
    const targetDate = this.#getMidnightTimestamp(date)

    // Time difference will be positive if the target date is in the future.
    const timeDifference = targetDate - dateNow

    const days = timeDifference / MILLISECONDS_PER_DAY
    return days >= 0 ? Math.ceil(days) : Math.floor(days)
  }

  /**
   * Get the timestamp for midnight of the specified date.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The date with the time set to midnight.
   */
  #getMidnightTimestamp (date) {
    const targetDate = new Date(date)
    return targetDate.setHours(0, 0, 0, 0)
  }

  /**
   * Get the difference between two dates.
   *
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The number of days between the dates.
   */
  getDaysBetween (date1, date2) {
    // Use UTC to avoid daylight savings problems.
    const date1UTC = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
    const date2UTC = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())
    return (date2UTC - date1UTC) / MILLISECONDS_PER_DAY
  }
}
