/**
 * @file The Day class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

import TimeInterval from './TimeInterval.js'

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24

/**
 * Represents a Day.
 */
export default class Day {
  #date

  /**
   * Initialises a new instance.
   *
   * @param {Date} date - A date object that represents the day.
   */
  constructor (date) {
    this.#date = new Date(date)
  }

  /**
   * Count days passed or days until the day.
   *
   * @returns {number} The number of days.
   */
  getDays () {
    const dateNow = this.#getMidnightTimestamp(Date.now())
    const targetDate = this.#getMidnightTimestamp(this.#date)

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
   * Get the day of the year.
   *
   * @returns {number} A number that represents the day of the year.
   */
  getDayOfTheYear () {
    // Use UTC to avoid daylight savings problems.
    const startOfTheYear = Date.UTC(this.#date.getFullYear(), 0, 0)
    const targetDate = Date.UTC(this.#date.getFullYear(), this.#date.getMonth(), this.#date.getDate())
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
   * Check if the day is in the interval.
   *
   * @param {TimeInterval} interval - The time interval.
   * @returns {boolean} True if the date is in the interval.
   */
  isBetween (interval) {
    return this.#date >= interval.startDate && this.#date <= interval.endDate
  }

  /**
   * Add days to the date.
   *
   * @param {number} numberOfDays - The number of days to add.
   * @returns {Date} The date with the added days.
   */
  getFutureDay (numberOfDays) {
    const targetDate = new Date(this.#date)
    targetDate.setDate(targetDate.getDate() + numberOfDays)
    return targetDate
  }

  /**
   * Remove days from the date.
   *
   * @param {number} numberOfDays - The number of days to remove.
   * @returns {Date} The date with the added days.
   */
  getPastDay (numberOfDays) {
    const targetDate = new Date(this.#date)
    targetDate.setDate(targetDate.getDate() - numberOfDays)
    return targetDate
  }
}
