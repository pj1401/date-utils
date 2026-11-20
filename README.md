# date-utils

This is a collection of utility methods for the `Date` object.

## Install

**Using npm:**

```bash
npm i @pj1401/date-utils
```

## Usage

**Import:**

```javaScript
import { DateUtil } from "@pj1401/date-utils";

const dateUtil = new DateUtil()
```

**Methods:**

 - [countDays](#countdays)
 - [getWeekNumber](#getweeknumber)
 - [getOrdinalDate](#getordinaldate)
 - [getDaysBetween](#getdaysbetween)
 - [getDatesBetween](#getdatesbetween)
 - [getDaysInMonth](#getdaysinmonth)
 - [getFirstDayOfMonth](#getfirstdayofmonth)
 - [getMonthDays](#getmonthdays)
 - [getQuarter](#getquarter)
 - [isBetween](#isbetween)
 - [startOfWeek](#startofweek)
 - [endOfWeek](#endofweek)
 - [getDaysUntilWeekend](#getdaysuntilweekend)
 - [countWorkingDays](#countworkingdays)
 - [addDays](#adddays)
 - [removeDays](#removedays)

### countDays

**countDays(date: Date): number**

Returns the number of days until a date. If the date is in the past, the number of days passed is returned (negative).

```javaScript
const nextWeek = new Date()
nextWeek.setDate(nextWeek.getDate() + 7)

dateUtil.countDays(nextWeek) // returns 7

dateUtil.countDays(new Date('2025-09-30')) // returns a negative number
```

### getWeekNumber

**getWeekNumber(date: Date): number**

Returns the number of the week that the date is in.

```javaScript
dateUtil.getWeekNumber(new Date('2025-09-17')) // returns 38
```

### getOrdinalDate

**getOrdinalDate(date: Date): number**

Returns the number representing the day of the year.

```javaScript
dateUtil.getOrdinalDate(new Date('2025-09-30')) // returns 273
```

### getDaysBetween

**getDaysBetween(date1: Date, date2: Date): number**

Returns the number of days between two dates.

```javaScript
dateUtil.getDaysBetween(new Date('2025-09-15'), new Date('2025-09-22')) // returns 7
```

### getDatesBetween

**getDatesBetween(startDate: Date, endDate: Date): Date[]**

Get an array of dates between two dates, inclusive.

```javaScript
dateUtil.getDatesBetween(new Date('2025-10-25'), new Date('2025-11-02'))
```

### getDaysInMonth

**getDaysInMonth(year: number, month: number): number**

Get the number of days in the month, depending on the year.
The month index is zero-based. This means that 0 represents January.

```javaScript
// Feb 2024
dateUtil.getDaysInMonth(2024, 1) // returns 29

// Feb 2026
dateUtil.getDaysInMonth(2026, 1) // returns 28

// Can be imported as a function.
import { getDaysInMonth } from "@pj1401/date-utils";
```

### getFirstDayOfMonth

**getFirstDayOfMonth(year: number, month: number): number**

Get the day of the week represented by a number. 0 represents Sunday.

```javaScript
// Oct 2026 Thursday
dateUtil.getFirstDayOfMonth(2026, 9) // returns 4

// Nov 2026 Sunday
dateUtil.getFirstDayOfMonth(2026, 10) // returns 0
```

### getMonthDays

**getMonthDays(year: number, month: number): number**

Get a number sequence representing the days in a month.

```javaScript
// Feb 2024
dateUtil.getMonthDays(2024, 1) // returns [1, 2, ..., 29]

// Feb 2026
dateUtil.getMonthDays(2026, 1) // returns [1, 2, ..., 28]
```

### getQuarter

**getQuarter(date: Date): number**

Returns the quarter of the year the date is in.

```javaScript
dateUtil.getQuarter(new Date('2025-10-01')) // returns 4
```

### isBetween

**isBetween(date: Date, startDate: Date, endDate: Date): boolean**

Check if a date is in the interval `[startDate, endDate]`.

```javaScript
dateUtil.isBetween(new Date('2025-09-30'), new Date('2025-09-29'), new Date('2025-10-01')) // true
```

### startOfWeek

**startOfWeek(date: Date): Date**

Returns the start (Monday) of the week the date is in.

```javaScript
dateUtil.startOfWeek(new Date('2025-09-30')) // returns a Date object set to 2025-09-29
```

### endOfWeek

**endOfWeek(date: Date): Date**

Returns the end (Sunday) of the week the date is in.

```javaScript
dateUtil.endOfWeek(new Date('2025-09-30')) // returns a Date object set to 2025-10-05
```

### getDaysUntilWeekend

**getDaysUntilWeekend(date: Date): number**

Get the number of days until the weekend (Saturday). If the date argument is a Sunday, it counts the days until the next weekend. If no argument is passed the current date will be used.

```javaScript
dateUtil.getDaysUntilWeekend(new Date('2025-11-05')) // returns 3
```

### countWorkingDays

**countWorkingDays(startDate: Date, endDate: Date): number**

Get the number of working days between two dates.

```javaScript
dateUtil.countWorkingDays(new Date('2025-10-20'), new Date('2025-11-01')) // returns 10
```

### addDays

**addDays(date: Date, numberOfDays: number): Date**

Add days to the date. The returned date is a different instance from the date argument.

```javaScript
dateUtil.addDays(new Date('2025-01-30'), 5) // returns a Date object set to 2025-02-04
```

### removeDays

**removeDays(date: Date, numberOfDays: number): Date**

Remove days from the date. The returned date is a different instance from the date argument.

```javaScript
dateUtil.addDays(new Date('2025-01-03'), 10) // returns a Date object set to 2024-12-24
```

## Testing

See [Testing instructions](./docs/testrapport.md#run-tests)
