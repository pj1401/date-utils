/**
 * @file Tests for the Month.ts file.
 */

import { describe, expect, test } from '@jest/globals'
import Month from '../../src/Month'

describe('Month', () => {
  describe('getDaysInMonth', () => {
    test('Feb 2024 (leap year)', () => {
      const month = new Month(new Date('2024-02'))
      expect(month.getDaysInMonth(2024)).toEqual(29)
    })
    test('Feb 2026', () => {
      const month = new Month(new Date('2026-02'))
      expect(month.getDaysInMonth(2026)).toEqual(28)
    })
    test('Oct 2026', () => {
      const month = new Month(new Date('2026-10'))
      expect(month.getDaysInMonth(2026)).toEqual(31)
    })
  })

  describe('getFirstDayOfMonth', () => {
    test('Oct 2026 Thursday (4)', () => {
      const month = new Month(new Date('2026-10'))
      expect(month.getFirstDayOfMonth(2026)).toEqual(4)
    })
    test('Nov 2026 Sunday (0)', () => {
      const month = new Month(new Date('2026-11'))
      expect(month.getFirstDayOfMonth(2026)).toEqual(0)
    })
    test('Dec 2026 Tuesday (2)', () => {
      const month = new Month(new Date('2026-12'))
      expect(month.getFirstDayOfMonth(2026)).toEqual(2)
    })
  })
})
