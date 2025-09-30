/**
 * @file The YearCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

/**
 * A collection of helper functions for calendar functionality.
 */
export default class YearCounter {
  /**
   * Get the quarter of the year the date is in.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number representing the quarter of the year.
   */
  getYearQuarter (date) {
    let quarter = 4
    const month = date.getMonth()
    if (month < 3) {
      quarter = 1
    } else if (month < 6) {
      quarter = 2
    } else if (month < 9) {
      quarter = 3
    }
    return quarter
  }
}
