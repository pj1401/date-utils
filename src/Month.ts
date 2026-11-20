/**
 * @file The Month class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

/**
 * Represents a month.
 */
export default class Month {
  /**
   * An integer that represents the month. 0 represents January.
   *
   * @type {number}
   */
  #month: number

  /**
   * Initialises a new instance.
   *
   * @param {Date} date - Any date that is in the month.
   */
  constructor (date: Date) {
    this.#month = date.getMonth()
  }

  /**
   * Get the number of days in the month, depending on the year.
   * @param {number} year The year the month is in.
   * @returns {number} A number representing the last day in the month.
   */
  getDaysInMonth (year: number): number {
    // From: https://stackoverflow.com/a/1185804
    // Setting the day value in the Date constructor to 0 will give the last day of the previous month.
    // Add +1 to the month value to get the last day of the current month.
    const date = new Date(year, this.#month + 1, 0)
    return date.getDate()
  }

  /**
   * Get the day of the week represented by a number. 0 represents Sunday.
   * @param {number} year The year the month is in.
   * @returns {number} A number representing the day of the week.
   */
  getFirstDayOfMonth (year: number): number {
    const date = new Date(year, this.#month, 1)
    return date.getDay()
  }

  /**
   * Get a number sequence representing the days in a month
   * @param {number} year The year the month is in.
   * @returns {number[]} A sequence of numbers representing the days in the month.
   */
  getMonthDays (year: number): number[] {
    const daysInMonth = this.getDaysInMonth(year)
    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
  }

  /**
   * Get the quarter of the year the month is in.
   *
   * @returns {number} A number representing the quarter of the year.
   */
  getYearQuarter (): number {
    let quarter = 4
    if (this.#month < 3) {
      quarter = 1
    } else if (this.#month < 6) {
      quarter = 2
    } else if (this.#month < 9) {
      quarter = 3
    }
    return quarter
  }
}
