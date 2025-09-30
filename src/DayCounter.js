/**
 * @file The DayCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

import TimeInterval from './TimeInterval.js'

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

    let dayCount = 0
    if (days >= 0) {
      // Round up if the date is in the future, to include part of a day.
      dayCount = Math.ceil(days)
    } else {
      // Round down if the date is in the past. Only count whole days.
      dayCount = Math.floor(days)
    }
    return dayCount
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
   * Get the day of the year from a date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number that represents the day of the year.
   */
  getDayOfTheYear (date) {
    // Use UTC to avoid daylight savings problems.
    const startOfTheYear = Date.UTC(date.getFullYear(), 0, 0)
    const targetDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    return (targetDate - startOfTheYear) / MILLISECONDS_PER_DAY
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

  /**
   * Check if a date is in the interval.
   *
   * @param {Date} date - The date to check.
   * @param {TimeInterval} interval - The time interval.
   * @returns {boolean} True if the date is in the interval.
   */
  isBetween (date, interval) {
    return date >= interval.startDate && date <= interval.endDate
  }

  /**
   * Add days to the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to add.
   * @returns {Date} The date with the added days.
   */
  addDays (date, numberOfDays) {
    const targetDate = new Date(date)
    targetDate.setDate(targetDate.getDate() + numberOfDays)
    return targetDate
  }

  /**
   * Remove days from the date.
   *
   * @param {Date} date - The specified date.
   * @param {number} numberOfDays - The number of days to remove.
   * @returns {Date} The date with the added days.
   */
  removeDays (date, numberOfDays) {
    const targetDate = new Date(date)
    targetDate.setDate(targetDate.getDate() - numberOfDays)
    return targetDate
  }
}
