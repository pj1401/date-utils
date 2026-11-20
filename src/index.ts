import DateUtil from './DateUtil.js'

/**
 * Get the number of days in the month, depending on the year.
 * @param {number} year The year the month is in.
 * @param {number} month The number representing the month. Zero-based, 0 represents January.
 * @returns {number} A number representing the last day in the month.
 */
function getDaysInMonth (year: number, month: number): number {
  const dateUtil = new DateUtil()
  return dateUtil.getDaysInMonth(year, month)
}

/**
 * Get the day of the week represented by a number. 0 represents Sunday.
 * @param {number} year The year the month is in.
 * @param {number} month The number representing the month. Zero-based, 0 represents January.
 * @returns {number} A number representing the day of the week.
 */
function getFirstDayOfMonth (year: number, month: number): number {
  const dateUtil = new DateUtil()
  return dateUtil.getFirstDayOfMonth(year, month)
}

/**
 * Get a number sequence representing the days in a month
 * @param {number} year The year the month is in.
 * @param {number} month The number representing the month. Zero-based, 0 represents January.
 * @returns {number[]} A sequence of numbers representing the days in the month.
 */
function getMonthDays (year: number, month: number): number[] {
  const dateUtil = new DateUtil()
  return dateUtil.getMonthDays(year, month)
}

export { DateUtil, getDaysInMonth, getFirstDayOfMonth, getMonthDays }
