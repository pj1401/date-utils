/**
 * @file The WeekCounter class.
 * @author Patricia Johansson
 * @version 1.0.0
 */

/**
 * Represents a WeekCounter.
 */
export default class WeekCounter {
  /**
   * Get the week number from a date.
   *
   * @param {Date} date - The specified date.
   * @param {number} dayOfTheYear - The ordinal day number for the date.
   * @returns {number} The week number.
   */
  getWeekNumber (date, dayOfTheYear) {
    /**
     * @see https://en.wikipedia.org/wiki/ISO_week_date#Calculating_the_week_number_from_an_ordinal_date
     */
    const dayOfTheWeek = this.#getDayOfTheWeek(date)
    const week = Math.trunc((10 + (dayOfTheYear - dayOfTheWeek)) / 7)
    let weekOfTheYear = week

    // Check if the calculated week is the last week or first week of the year.
    if (week < 1) {
      // Get the number of weeks from the preceding year.
      weekOfTheYear = this.#getWeeksPerYear(date.getFullYear() - 1)
    } else if (week === 53) {
      // Check if it is in week 1 of the following year.
      if (this.#endsOnWeek1(date.getFullYear())) {
        weekOfTheYear = 1
      } else {
        weekOfTheYear = week
      }
    }
    return weekOfTheYear
  }

  /**
   * Get the day of the week, represented by a number.
   *
   * @param {Date} date - The specified date.
   * @returns {number} A number that represents the day of the week. 1 represents Monday, 7 for Sunday.
   */
  #getDayOfTheWeek (date) {
    // getDay() returns 0 for Sunday, but Sunday has to be 7 for the formula to work.
    let weekday = 7
    if (date.getDay() !== 0) {
      weekday = date.getDay()
    }
    return weekday
  }

  /**
   * Returns true if 31 December is in week 1 of the following year.
   *
   * @param {number} year  - A number representing the year.
   * @returns {boolean} True if 31 December is in week 1 of the following year.
   */
  #endsOnWeek1 (year) {
    const lastDay = new Date(`${year}-12-31`)
    const weekDay = this.#getWeekdayString(lastDay)

    /**
     * @see https://en.wikipedia.org/wiki/ISO_week_date#Last_week
     * If 31 December is on a Monday, Tuesday, or Wednesday it is in W01 of the next year.
     */
    return weekDay === 'Monday' || weekDay === 'Tuesday' || weekDay === 'Wednesday'
  }

  /**
   * Get the number of weeks in a year.
   *
   * @param {number} year - The year.
   * @returns {number} The number of weeks in the year.
   */
  #getWeeksPerYear (year) {
    let weeks = 52
    if (this.#has53weeks(year)) {
      weeks = 53
    }
    return weeks
  }

  /**
   * Returns true if the year has 53 weeks.
   *
   * @param {number} year - A number representing the year.
   * @returns {boolean} True if the year has 53 weeks.
   */
  #has53weeks (year) {
    /**
     * @see https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year
     */
    const firstDay = new Date(`${year}-01-01`)
    const lastDay = new Date(`${year}-12-31`)

    const firstDayIsThursday = this.#getWeekdayString(firstDay) === 'Thursday'
    const firstDayIsWednesday = this.#getWeekdayString(firstDay) === 'Wednesday'
    const lastDayIsThursday = this.#getWeekdayString(lastDay) === 'Thursday'
    const lastDayIsFriday = this.#getWeekdayString(lastDay) === 'Friday'

    return firstDayIsThursday || (firstDayIsWednesday && this.#isLeapYear(year)) ||
    lastDayIsThursday || (lastDayIsFriday && this.#isLeapYear(year))
  }

  /**
   * Get the day of the week as a readable string.
   *
   * @param {Date} date - The specified date.
   * @returns {string} The day of the week.
   */
  #getWeekdayString (date) {
    const weekdayStringMap = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    return weekdayStringMap[date.getDay()]
  }

  /**
   * Returns true if the year is a leap year.
   *
   * @param {number} year - The year.
   * @returns {boolean} True if the year is a leap year.
   */
  #isLeapYear (year) {
    /**
     * @see https://en.wikipedia.org/wiki/Leap_year
     * each year that is a multiple of 4, except for years evenly divisible by 100 but not by 400
     */
    return ((year % 4) === 0 && (year % 100) !== 0) || ((year % 400) === 0)
  }

  /**
   * Get the start of the week.
   *
   * @param {Date} date - The specified date.
   * @returns {Date} The start of the week.
   */
  startOfWeek (date) {
    const weekday = date.getDay()
    const weekStart = new Date(date)
    switch (weekday) {
      case 0: // Sunday
        weekStart.setDate(date.getDate() - 6)
        break
      case 2: // Tuesday
        weekStart.setDate(date.getDate() - 1)
        break
      case 3:
        weekStart.setDate(date.getDate() - 2)
        break
      case 4:
        weekStart.setDate(date.getDate() - 3)
        break
      case 5:
        weekStart.setDate(date.getDate() - 4)
        break
      case 6: // Saturday
        weekStart.setDate(date.getDate() - 5)
        break
      default:
        break
    }
    weekStart.setHours(0, 0, 0, 0)
    return weekStart
  }
}
