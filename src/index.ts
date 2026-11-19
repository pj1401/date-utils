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

export { DateUtil, getDaysInMonth }
