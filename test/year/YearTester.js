/**
 * @file The YearTester class.
 * @module test/year/YearTester.js
 * @author Patricia Johansson
 * @version 1.0.0
 */

import Year from '../../src/Year.js'

/**
 * Represents a Year test runner.
 */
export default class YearTester {
  year

  /**
   * Initialises a new instance.
   *
   * @param {Date} date - Any date that is in the year.
   */
  constructor (date) {
    this.year = new Year(date)
  }

  /**
   * Run tests for the isLeapYear method, where the result is expected to be true.
   */
  runIsLeapYearTestTrue () {
    expect(this.year.isLeapYear()).toBeTruthy()
  }

  /**
   * Run tests for the isLeapYear method, where the result is expected to be false.
   */
  runIsLeapYearTestFalse () {
    expect(this.year.isLeapYear()).toBeFalsy()
  }
}
