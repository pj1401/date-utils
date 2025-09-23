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
    const week = Math.trunc((10 + (dayOfTheYear - dayOfTheWeek)) / 7)
    let weekOfTheYear = week

    // Check if the calculated week is the last week or first week of the year.
    if (week < 1) {
      // Get the number of weeks from the preceding year.
      weekOfTheYear = this.#getWeeksPerYear(date.getFullYear() - 1)
    } else if (week === 53) {
      // TODO: Check if it is in week 1 of the following year.
      weekOfTheYear = 1
    }
    return weekOfTheYear
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

  /**
   * Get the number of weeks in a year.
   *
   * @param {number} year - The year.
   * @returns {number} The number of weeks in the year.
   */
  #getWeeksPerYear (year) {
    const firstDay = new Date(`${year}-01-01`)
    const lastDay = new Date(`${year}-12-31`)
    const firstWeekDay = firstDay.getDay()
    const lastWeekDay = lastDay.getDay()
    let numberOfWeeks = 52
    if (firstWeekDay === 4 || (firstWeekDay === 3 && this.#isLeapYear(year)) ||
    lastWeekDay === 4 || (lastWeekDay === 5 && this.#isLeapYear(year))) {
      numberOfWeeks = 53
    }
    return numberOfWeeks
  }

  /**
   * Returns true if the year is a leap year.
   *
   * @param {number} year - The year.
   * @returns {boolean} True if the year is a leap year.
   */
  #isLeapYear (year) {
    return ((year % 4) === 0 && (year % 100) !== 0) || ((year % 400) === 0)
  }
}
