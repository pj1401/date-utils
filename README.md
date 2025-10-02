# date-utils

This is a collection of utility methods for the `Date` object.

## Usage

Import:

```javaScript
import DateUtil from 'date-utils'

const dateUtil = new DateUtil()
```

## Methods

### countDays(date: Date): number

Returns the number of days until a date. If the date is in the past, the number of days passed is returned (negative).

```javaScript
const nextWeek = new Date()
nextWeek.setDate(nextWeek.getDate() + 7)

dateUtil.countDays(nextWeek) // returns 7

dateUtil.countDays(new Date('2025-09-30')) // returns a negative number
```

### getWeekNumber(date: Date): number

Returns the number of the week that the date is in.

```javaScript
dateUtil.getWeekNumber(new Date('2025-09-17')) // returns 38
```

### getOrdinalDate(date: Date): number

Returns the number representing the day of the year.

```javaScript
dateUtil.getOrdinalDate(new Date('2025-09-30')) // returns 273
```

### getDaysBetween(date1: Date, date2: Date): number

Returns the number of days between two dates.

```javaScript
dateUtil.getDaysBetween(new Date('2025-09-15'), new Date('2025-09-22')) // returns 7
```

### getQuarter(date: Date): number

Returns the quarter of the year the date is in.

```javaScript
dateUtil.getQuarter(new Date('2025-10-01')) // returns 4
```

### isBetween(date: Date, startDate: Date, endDate: Date): boolean

Check if a date is in the interval `[startDate, endDate]`.

```javaScript
dateUtil.isBetween(new Date('2025-09-30'), new Date('2025-09-29'), new Date('2025-10-01')) // true
```

### startOfWeek(date: Date): Date

Returns the start (Monday) of the week the date is in.

```javaScript
dateUtil.startOfWeek(new Date('2025-09-30')) // returns a Date object set to 2025-09-29
```

### endOfWeek(date: Date): Date

Returns the end (Sunday) of the week the date is in.

```javaScript
dateUtil.endOfWeek(new Date('2025-09-30')) // returns a Date object set to 2025-10-05
```

### addDays(date: Date, numberOfDays: number): Date

Add days to the date. The returned date is a different instance from the date argument.

```javaScript
dateUtil.addDays(new Date('2025-01-30'), 5) // returns a Date object set to 2025-02-04
```

### removeDays(date: Date, numberOfDays: number): Date

Remove days from the date. The returned date is a different instance from the date argument.

```javaScript
dateUtil.addDays(new Date('2025-01-03'), 10) // returns a Date object set to 2024-12-24
```
