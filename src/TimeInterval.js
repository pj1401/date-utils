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

  /**
   * Get the dates in the time interval.
   *
   * @returns {Date[]} An array of Date objects.
   */
  getDatesBetween () {
    const dates = []
    const currentDate = new Date(this.startDate)
    const finalDate = new Date(this.endDate)

    if (currentDate > finalDate) {
      throw new RangeError('The start date must be earlier than the end date.')
    }

    while (currentDate <= finalDate) {
      dates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return dates
  }
}
