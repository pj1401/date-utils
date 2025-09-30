/**
 * @file The TimeInterval class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

/**
 * Represents an interval of time.
 */
export default class TimeInterval {
  startDate
  endDate

  /**
   * Initialises a new instance.
   *
   * @param {Date} startDate - The start date.
   * @param {Date} endDate - The end date.
   */
  constructor (startDate, endDate) {
    this.startDate = startDate
    this.endDate = endDate
  }
}
