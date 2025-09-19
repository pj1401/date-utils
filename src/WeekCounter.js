/**
 * @file The WeekCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24

/**
 * Represents a WeekCounter.
 */
export default class WeekCounter {
  /**
   * Get the week number from a date.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The week number.
   */
  getWeekNumber (date) {
    /**
     * @see https://en.wikipedia.org/wiki/ISO_week_date#Calculating_the_week_number_from_an_ordinal_date
     */
    const dayOfTheYear = this.#getDayOfTheYear(date)
    const dayOfTheWeek = this.#getDayOfTheWeek(date)
    const week = (10 + (dayOfTheYear - dayOfTheWeek)) / 7
    return week
  }

  /**
   * Get the day of the year.
   *
   * @param {Date} date - The specified date.
   * @returns {number} The day of the year.
   */
  #getDayOfTheYear (date) {
    // Use UTC to avoid daylight savings problems.
    const startOfTheYear = Date.UTC(date.getFullYear(), 0, 1)
    const targetDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    return (targetDate - startOfTheYear) / MILLISECONDS_PER_DAY
  }

  /**
   * Get the day of the week, represented by a number.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number that represents the day of the week. 1 represents Monday, 7 for Sunday.
   */
  #getDayOfTheWeek (date) {
    // getDay() returns 0 for Sunday, but Sunday has to be 7 for the formula to work.
    return date.getDay() !== 0 ? date.getDay() : 7
  }
}
